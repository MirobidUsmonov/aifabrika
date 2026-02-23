'use server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function escapeHtml(text: string) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function submitQuizToTelegram(data: {
    name: string;
    phone: string;
    answers: Record<number, string>;
}) {
    if (!BOT_TOKEN || !CHAT_ID) {
        console.error("Telegram credentials not found in env variables");
        return { success: false, error: "Configuration Error" };
    }

    const questions = [
        "Yoshingiz nechada?",
        "Hozirgi holatingiz?",
        "Kursdan asosiy maqsadingiz nima?",
        "Qaysi tarif sizga ma'qul?"
    ];

    let message = `🚀 <b>Yangi ariza (AI Fabrika)!</b>\n\n`;
    message += `👤 <b>Ism:</b> ${escapeHtml(data.name)}\n`;
    message += `📞 <b>Telefon:</b> +998 ${escapeHtml(data.phone)}\n\n`;
    message += `📝 <b>Javoblar:</b>\n`;

    questions.forEach((q, idx) => {
        const answer = data.answers[idx] || 'Javob yo\'q';
        message += `<b>${idx + 1}. ${escapeHtml(q)}</b>\n${escapeHtml(answer)}\n\n`;
    });

    const chatIds = [CHAT_ID, '1562976292'];

    try {
        const results = await Promise.all(
            chatIds.map(id =>
                fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: id,
                        text: message,
                        parse_mode: 'HTML',
                        disable_web_page_preview: true
                    }),
                })
            )
        );

        const hasError = results.some(res => !res.ok);
        if (hasError) {
            console.error('One or more Telegram API errors occurred');
            return { success: false, error: 'Telegram API error' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return { success: false, error: 'Network error' };
    }
}
