import gulp from 'gulp';
import changed from 'gulp-changed';
import project from '../aurelia.json';

export default function test() {
  return gulp.src(project.paths.???)
    .pipe(changed(project.paths.output, {extension: '.???'}))
    .pipe(gulp.dest(project.paths.output));
}

