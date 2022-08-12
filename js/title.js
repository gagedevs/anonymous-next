
// var geta = a => localStorage.getItem(a)
// var seta = (a, b) => localStorage.setItem(a, b)
export function get(a) {
  return localStorage.getItem(a);
}
export function set(a,b) {
  if(typeof window !== "undefined") {
    localStorage.setItem(a, b);
  }
  
}
// var link = document.createElement('link');
// link.rel = 'icon';
//document.getElementsByTagName('head')[0].appendChild(link);
export function faviconChange(value) {
  set('link', value)
  favicon();
  link.href = get('link') || '/favicon.ico';
  console.log("working " + link.href)
}

// link.href = get('link') || '/favicon.ico';
