/// <binding AfterBuild='bulid' />
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('bulid', shell.task(['au build']));
