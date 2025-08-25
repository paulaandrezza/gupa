class ProductCard extends HTMLElement {
  connectedCallback() {
    const imagem = this.getAttribute("imagem")
    const numero = this.getAttribute("numero")
    const nome = this.getAttribute("nome")
    const descricao = this.getAttribute("descricao")
    const url = this.getAttribute("url") || "#"

    this.innerHTML = `
      <style>
        .product-card-wrapper {
          width: 100%;
          cursor: pointer;
        }
        .card {
          width: 100%;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .card-content {
          padding: 0.75rem 1rem;
        }
        .product-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .product-card img {
          width: 96px;
          height: 96px;
          object-fit: cover;
          border-radius: 6px;
        }
        .info {
          flex: 1;
        }
      </style>

      <div class="product-card-wrapper card">
        <div class="card-content">
          <div class="product-card">
            <img src="${imagem}" alt="${nome}">
            <div class="info">
              <p class="subtitle is-6"><b>#${numero} - </b>${nome}</p>
              <p class="is-size-7">${descricao}</p>
            </div>
          </div>
        </div>
      </div>
    `

    this.querySelector(".product-card-wrapper").addEventListener(
      "click",
      () => {
        window.open(url, "_blank")
      }
    )
  }
}

customElements.define("product-card", ProductCard)
