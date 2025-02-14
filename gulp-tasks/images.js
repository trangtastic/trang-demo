const { dest, src } = require('gulp');
const imagemin = require('gulp-imagemin');

// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = () => {
    // We have specific configs for jpeg and png files to try
    // to really pull down asset sizes
    return src('./src/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .on('data', (file) => {
            console.log(`Minified: ${file.relative} (saved ${file.stat.size} bytes)`);
        })
        .pipe(dest('./docs/images'));
};

module.exports = images;
