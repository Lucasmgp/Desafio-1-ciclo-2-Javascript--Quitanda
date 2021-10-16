//#produtos -> Lista de produtos
//#cestaDoCliente -> cesta de produtos
//#mostraTotalCompra -> mostrar total da compra
//--------------------------------------------------
window.onload=function(){
    let frutas=[
        {descricao:'Melancia', preco:0.85},
        {descricao:'Abacate', preco:5.25},
        {descricao:'Banana', preco:3.75},
        {descricao:'Maçã', preco:2.75},
    ];

    const listaProdutos=document.querySelector('#produtos');

    (
        ()=>{
            for(let pro of frutas){
                const flihoLi=document.createElement('li');
                for(let listaP in pro){
                  if(listaP=='preco'){
                  listaProdutos.appendChild(flihoLi).setAttribute('data-preco', 
                  pro[listaP]);
                } else {
                listaProdutos.appendChild(flihoLi).textContent=`${pro[listaP]}`;
                }
                            
            }
        } 
        }
    )();

    let cestaCli=[];
    const cestaDoCliente=document.querySelector('#cestaDoCliente');
    const totalCompra=document.querySelector('#mostraTotalCompra');
    let selecionarItem=document.querySelectorAll('#produtos>li');
    let total=0;

    selecionarItem.forEach(function(item){
        item.addEventListener('click', function(){
            if(cestaCli.indexOf(item.textContent)!=-1){
                alert('Este ítem já está na sua cesta');
            } else {
                total+=Number(item.dataset.preco);
                cestaCli.push(item.textContent);
                let itemCesta=document.createElement('li');
                cestaDoCliente.appendChild(itemCesta).textContent=item.textContent;
                totalCompra.value=total.toFixed(2);
            }
            console.log(item.textContent);
        })
    })
}
export{};