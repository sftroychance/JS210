// The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. Is the output what you expected? Are there any bugs/errors?
//
// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
//
// console.log(paragraph);
//
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
               ligula at risus vulputate faucibus. Aliquam venenatis \etnibh ut justo dignissim \
               dignissim. Proin dictum purus mollis diam auctor solli\etcitudin. Ut in bibendum \
               ligula. Suspendisse quam ante, dictum aliquam tristiqu\ete id, porttitor pulvinar \
               diam. Maecenas blandit aliquet ipsum. Integer vitae sa\etpien sed nulla rutrum \
               hendrerit ac a urna. Interdum et malesuada fames ac an\ette ipsum primis in faucibus.';
console.log(paragraph);
// When using `\` to continue the line of a string, all the whitespace
// around the `\` is included in the string--this includes the space a
// beginning of the next line.  To correct this problem:

paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \etSuspendisse sed \
ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo di\etgnissim \
dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in b\etibendum \
ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor \etpulvinar \
diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla r\etutrum \
hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis \etin faucibus.';
console.log(paragraph);