// newest items first
function sortByDate(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

Handlebars.registerHelper( "join", function( arr, sep ) {
  return (arr instanceof Array ? arr : [arr]).join(sep)
})
