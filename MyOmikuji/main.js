

    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const fortunes = ['大吉', '中吉', '凶'];

    btn.addEventListener('click',()=>{
        const n = Math.floor(Math.random()*fortunes.length)
        result.textContent = n;
        result.textContent = fortunes[n];
        });
