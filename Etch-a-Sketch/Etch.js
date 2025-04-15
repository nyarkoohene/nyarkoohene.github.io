const grid = document.querySelector('.grid-wrapper');

const newGrid = document.querySelector('.grid-btn')
newGrid.addEventListener('click', () =>{
    let gridSize = prompt('Please enter the number of squares per side for your new grid. Number should beless than 100')
    if(gridSize == null || gridSize =='' || gridSize>=100){
        alert('Please enter a number less than 100' )
    } else {
        grid.innerHTML=''
        for(i=1;i<=gridSize ; i++){
            let x = i
            const row = document.createElement('div')
            row.setAttribute('class','rows')
            row.setAttribute('id',`row${x}`)
            grid.appendChild(row)
        }
        
        const rows =  document.querySelectorAll('.rows')
        for(y of rows){
            for(i=1;i<=gridSize ; i++){
                let x = i
                const collumn  = document.createElement('div');
                collumn.setAttribute('class',' collumns');
                collumn.setAttribute('id',` collumn${x}`);
                collumn.addEventListener('click', (e) =>{
                    const hovered = e.target
                    hovered.setAttribute('style','background-color:black') 
                })
                y.appendChild(collumn)
            }
        }
    }

})


