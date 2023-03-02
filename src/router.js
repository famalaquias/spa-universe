export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
  
    /* desabilita a mudança automática da página */
    event.preventDefault();
  
    /* mostra para que página está indo */
    /* history: é o histórico do window */
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
  
    /* pegando as rotas */
    const route = this.routes[pathname] || this.routes[404];
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}