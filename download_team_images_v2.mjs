
import fs from 'fs';
import https from 'https';
import path from 'path';

const team = [
    {
        name: "ai.fabrika",
        url: "https://scontent.cdninstagram.com/v/t51.82787-19/624830279_17848125816671320_9120617198034601420_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=FrmKOCgOW10Q7kNvwGIJp2C&_nc_oc=Adn720ffSNw1JoE3CCEZmxTpTjDtBu9C77frdLTEA4ZVJmgecc6D8ZRN6qyWcPHAKt0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=NGDRDRLNZuww8RPYKZ-lBA&oh=00_AfutrEHVTskJp9iOja3wly6cEGiQLzm5ttmvLEGZqE31yQ&oe=69856EE5"
    },
    {
        name: "ai.birodar",
        url: "https://scontent.cdninstagram.com/v/t51.82787-19/622767836_17852205099663355_3779482646305853376_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=H1nlgTQ_ZcwQ7kNvwF_uztB&_nc_oc=Adnn--5fFgdzmVmx70uNhPQEoSwcZNgr4abqcP5wOoMdJsFdf_S28mxooE9C-Tf4Suk&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=uV-RbTl8haFqSH3O3Hl1cA&oh=00_AfuqxiaWaro3B4vcqWuX-8OanyHAiMQn0vWlptwq3bMY0Q&oe=69856155"
    },
    {
        name: "ai.ustaxona",
        url: "https://scontent.cdninstagram.com/v/t51.82787-19/619225397_17844758814673800_7932425456893505701_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=c_zp1VpcGUAQ7kNvwHMYZEx&_nc_oc=Adli0Q2Vl9j45D3tBV2f3bZnKZtc9sl2fWNTvtcje5Gsrh7KqBFJYRO8YVanflA2UwU&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=H3MSVgEvBY4N6Ks4r2g8NQ&oh=00_AfuSg4PWYcmBmbutDHW-C8OHWCUOld7B2nYFCOgVQGjXUw&oe=6985744C"
    }
];

const saveDir = path.join(process.cwd(), 'public/images/team');

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        https.get(url, options, response => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded to ${filepath}`);
                    resolve();
                });
            } else {
                file.close();
                fs.unlink(filepath, () => { });
                reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
            }
        }).on('error', err => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

const run = async () => {
    for (const member of team) {
        try {
            await downloadImage(member.url, path.join(saveDir, `${member.name}.jpg`));
        } catch (error) {
            console.error(`Failed to download ${member.name}:`, error.message);
        }
    }
};

run();
