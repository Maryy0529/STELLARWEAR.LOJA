// ===== MENU MOBILE =====
const mobileBtn = document.getElementById("mobile_btn");
const mobileMenu = document.getElementById("mobile_menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// ===== CARRINHO =====
const cartBtnDesktop = document.getElementById("cart_btn_desktop");
const cartBtnMobile = document.getElementById("cart_btn");
const carrinho = document.getElementById("carrinho");
const fecharCarrinho = document.getElementById("fechar_carrinho");
const itensCarrinhoContainer = document.getElementById("itens_carrinho");
const totalCarrinho = document.getElementById("total");

if (cartBtnDesktop && carrinho) {
  cartBtnDesktop.addEventListener("click", () => carrinho.classList.add("active"));
}

if (cartBtnMobile && carrinho) {
  cartBtnMobile.addEventListener("click", () => carrinho.classList.add("active"));
}

if (fecharCarrinho && carrinho) {
  fecharCarrinho.addEventListener("click", () => carrinho.classList.remove("active"));
}

// ===== ADICIONAR ITENS AO CARRINHO =====
let carrinhoItens = [];

function atualizarCarrinho() {
  itensCarrinhoContainer.innerHTML = "";

  let total = 0;

  carrinhoItens.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item-carrinho");
    div.innerHTML = `
      <span>${item.nome}</span>
      <span>R$ ${item.preco.toFixed(2)}</span>
      <button class="remover" data-index="${index}">❌</button>
    `;
    itensCarrinhoContainer.appendChild(div);
    total += item.preco;
  });

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;

  // Botão remover
  const botoesRemover = document.querySelectorAll(".remover");
  botoesRemover.forEach(botao => {
    botao.addEventListener("click", () => {
      const idx = botao.getAttribute("data-index");
      carrinhoItens.splice(idx, 1);
      atualizarCarrinho();
    });
  });
}

// ===== BOTÕES ADICIONAR =====
const botoesAdicionar = document.querySelectorAll(".adicionar");
botoesAdicionar.forEach(botao => {
  botao.addEventListener("click", () => {
    const produto = botao.closest(".moda-item");
    const nome = produto.dataset.nome;
    const preco = parseFloat(produto.dataset.preco);

    carrinhoItens.push({ nome, preco });
    atualizarCarrinho();
    carrinho.classList.add("active"); // abre o carrinho automaticamente
  });
});

// ===== BOTÕES CURTIR =====
const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(botao => {
  botao.addEventListener("click", () => {
    botao.classList.toggle("curtido");
  });
});
