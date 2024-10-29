console.clear();

// 宣告變數
let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


  // 一、載入預設資料
  // 1-1 取出欲載入的區域
  const ticketCardArea = document.querySelector('.ticketCard-area');
  
  // 1-2 載入資料
  function init() {
    // 1-2-1 取出資料庫資料並組合
    let str = ``;
    data.forEach(function (ticketItem) {
      str += `<li class="ticketCard">
          <div class="ticketCard-img">
          <a href="#">
              <img src="${ticketItem.imgUrl}" alt="">
          </a>
          <div class="ticketCard-region">${ticketItem.area}</div>
          <div class="ticketCard-rank">${ticketItem.rate}</div>
          </div>
          <div class="ticketCard-content">
          <div>
              <h3>
              <a href="#" class="ticketCard-name">${ticketItem.name}</a>
              </h3>
              <p class="ticketCard-description">
              ${ticketItem.description}
              </p>
          </div>
          <div class="ticketCard-info">
              <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${ticketItem.group} </span> 組
              </p>
              <p class="ticketCard-price">
              TWD <span id="ticketCard-price">${ticketItem.price}</span>
              </p>
          </div>
          </div>
      </li>`
    });
    // 1-2-2 載入組合後的資料
    ticketCardArea.innerHTML = str;
  }
  init();
  
  // 二、篩選器
  // 2-1 取出篩選器按鈕
  const regionSearch = document.querySelector('.regionSearch');

  // 2-2 按下篩選按鈕
    // 2-2-1 監聽按鈕
    regionSearch.addEventListener('click',function (e) {
      
      // 2-2-2 取出資料庫資料
      let str = ``;
      data.forEach(function (ticketItem) {
        // 2-2-3 篩選資料並組合
        if (e.target.value == ticketItem.area) {
          str += `<li class="ticketCard">
              <div class="ticketCard-img">
              <a href="#">
                  <img src="${ticketItem.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${ticketItem.area}</div>
              <div class="ticketCard-rank">${ticketItem.rate}</div>
              </div>
              <div class="ticketCard-content">
              <div>
                  <h3>
                  <a href="#" class="ticketCard-name">${ticketItem.name}</a>
                  </h3>
                  <p class="ticketCard-description">
                  ${ticketItem.description}
                  </p>
              </div>
              <div class="ticketCard-info">
                  <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num"> ${ticketItem.group} </span> 組
                  </p>
                  <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">${ticketItem.price}</span>
                  </p>
              </div>
              </div>
          </li>`
        }else if (e.target.value == '' || e.target.value == '地區搜尋'){
          str += `<li class="ticketCard">
              <div class="ticketCard-img">
              <a href="#">
                  <img src="${ticketItem.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${ticketItem.area}</div>
              <div class="ticketCard-rank">${ticketItem.rate}</div>
              </div>
              <div class="ticketCard-content">
              <div>
                  <h3>
                  <a href="#" class="ticketCard-name">${ticketItem.name}</a>
                  </h3>
                  <p class="ticketCard-description">
                  ${ticketItem.description}
                  </p>
              </div>
              <div class="ticketCard-info">
                  <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num"> ${ticketItem.group} </span> 組
                  </p>
                  <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">${ticketItem.price}</span>
                  </p>
              </div>
              </div>
          </li>`
        }
      });
      // 2-3 載入組合後資料
      ticketCardArea.innerHTML = str;

    });


  // 三、新增資料
  // 3-1 取出input欄位
  const ticketName = document.querySelector('#ticketName');
  const ticketImgUrl = document.querySelector('#ticketImgUrl');
  const ticketRegion = document.querySelector('#ticketRegion');
  const ticketPrice = document.querySelector('#ticketPrice');
  const ticketNumMessage = document.querySelector('#ticketNum');
  const ticketRate = document.querySelector('#ticketRate');
  const ticketDescription = document.querySelector('#ticketDescription');
  const addTicketBtn = document.querySelector('.addTicket-btn');
  
  // 3-2 按下儲存按鈕
  // 3-2-1 監聽儲存按鈕
  addTicketBtn.addEventListener('click',function (e) {
    // 3-2-2 組合新資料
    let obj = {};
    obj.id = data.length;
    obj.name = ticketName.value;
    obj.imgUrl = ticketImgUrl.value;
    obj.area = ticketRegion.value;
    obj.description = ticketDescription.value;
    obj.group = ticketNumMessage.value;
    obj.price = ticketPrice.value;
    obj.rate = ticketRate.value;

    // 3-2-3 推送新資料到資料庫
    data.push(obj);

    // 3-2-4 更新載入預設資料
    init();

    // 3-2-5 清除欄位資料
    cleanForm()
    });
  
    function cleanForm() {
      ticketName.value = '';
      ticketImgUrl.value = '';
      ticketRegion.value = '';
      ticketDescription.value = '';
      ticketNumMessage.value = '';
      ticketPrice.value = '';
      ticketRate.value = '';
    }

  
    

    