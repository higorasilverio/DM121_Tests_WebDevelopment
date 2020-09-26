class ServiceView{
    constructor(element){
        this._element  = element;
    }
    _template(data){
        return `
            <ul>
                ${data.map(item => `
                    <li>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p>Preço: A partir de ${item.price} ${item.month === true ? ' por mês.' : ''}</p>
                    </li>
                `).join('')}
            </ul>
        `
    }

    update(data){
        this._element.innerHTML = this._template(data);
    }
}