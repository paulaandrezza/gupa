const container = document.getElementById("product-list")

products.forEach((p) => {
  const card = document.createElement("product-card")
  card.setAttribute("imagem", p.imagem)
  card.setAttribute("numero", p.numero)
  card.setAttribute("nome", p.nome)
  card.setAttribute("descricao", p.descricao)
  card.setAttribute("url", p.url)
  container.appendChild(card)
})
