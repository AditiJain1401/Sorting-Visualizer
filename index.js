const bars = [];
let barsHeight=[]

function newArray(){
    for(let i=1;i<=10;i++){
        bars.push(i);
        let height=Math.floor((Math.random() *100) + 1);
        barsHeight.push(height);
        
    }
    render();
}

function render(){
    const barsDiv=document.querySelector('.bars')
    console.log(barsHeight);
    for(let index in barsHeight){
        let height=barsHeight[index]
        barsDiv.innerHTML += 
            `<div class="bar" id="${height}" style="height: ${height*3}px; transform:translateX(${index*30}px)>
                <label class="bar-id">${height}</label>
            </div>`
    }
}

function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp;
    return arr
}

function bubbleSort() {
    for (let j = 0; j < barsHeight.length - 1; j++) {
        if (barsHeight[j + 1] < barsHeight[j]) {
            barsHeight = swap(barsHeight, j, j + 1);
        }
    }
    render();
}
newArray();
/*
const container = document.querySelector(".bars");
function render(num = 20) {
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

// function to perform "Selection Sort"
async function selectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    let minIndex = 0;
    for (let i = 0; i < bars.length; i ++) {
        minIndex = i;
        bars[i].style.backgroundColor = "darkblue";
        for (let j = i + 1; j < bars.length; j += 1) {
            bars[j].style.backgroundColor = "red";
            
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 300)
            );

            let val1 = parseInt(bars[j].childNodes[0].innerHTML);
            let val2 = parseInt(bars[minIndex].childNodes[0].innerHTML);
            if (val1 < val2) {
                if (minIndex !== i) {
                bars[minIndex].style.backgroundColor = "rgb(24, 190, 255)";
                }
                minIndex = j;
            } else {
                bars[j].style.backgroundColor = "rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        var temp1 = bars[minIndex].style.height;
        var temp2 = bars[minIndex].childNodes[0].innerText;
        bars[minIndex].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[minIndex].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 300)
        );

        bars[minIndex].style.backgroundColor = "rgb(24, 190, 255)";
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
    }
}
render();*/


