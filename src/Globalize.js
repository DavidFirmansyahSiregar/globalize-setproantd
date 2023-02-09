import gulp from 'gulp-concat';

gulp.task('copy:cldr:data', ['copy:cldr:en', 'copy:cldr:el'], () =>

  gulp.src([

    'node_modules/cldr-data/supplemental/timeData.json',

    'node_modules/cldr-data/supplemental/weekData.json',

    'node_modules/cldr-data/supplemental/plurals.json',

    'node_modules/cldr-data/supplemental/likelySubtags.json',

  ]).pipe(gulp.dest(`${dirs.dist}/js/vendor/cldr/supplemental`))

);

gulp.task('copy:cldr:el', () =>

  gulp.src([

    'node_modules/cldr-data/main/el/ca-gregorian.json',

    'node_modules/cldr-data/main/el/currencies.json',

    'node_modules/cldr-data/main/el/numbers.json',

    'node_modules/cldr-data/main/el/units.json',

  ]).pipe(gulp.dest(`${dirs.dist}/js/vendor/cldr/el`))

);

gulp.task('copy:cldr:en', () =>

  gulp.src([

    'node_modules/cldr-data/main/en/ca-gregorian.json',

    'node_modules/cldr-data/main/en/currencies.json',

    'node_modules/cldr-data/main/en/numbers.json',

    'node_modules/cldr-data/main/en/units.json',

  ]).pipe(gulp.dest(`${dirs.dist}/js/vendor/cldr/en`))

);