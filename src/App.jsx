
import './App.css'

function App() {
  return (
    <>
<div className="navbar">
  
<div className="student">
        <h1>O‘quvchilar</h1>
        <p>O‘quvchilarni ko‘rishingiz mumkin</p>
      </div>

      <div className="input-grup">
        <input type="text"  placeholder='Qidiruv o‘quvchilar, guruhlar va boshqa...'  />
        <img  width={44} height={44}  src="src/img/Group 5.png" alt=""/>
        <img width={44} height={44}  src="src/img/Ellipse 2.png" alt=""/>
        <div className="text">
          <h1>Sarvarbek</h1>
          <p>CEO</p>
        </div>
        <img className='freme'  width={18} height={18} src="src/img/Frame.png" alt=""/>

      </div>
</div>
<hr />

<div className="header">
<input className='qidiruv' type="text" placeholder='Qidiruv' />

<div className="button-grup">
  <button className='Xabar'>Xabar</button>
  <button className='Export'>Export</button>
</div>
</div>



<table class="table">
  <thead>
    <tr  >
      <th  className='th' scope="col"><input type="checkbox"  /> ID</th>
      <th scope="col">Ism Familiya Otasining ismi</th>
      <th scope="col">Guruhi</th>
      <th scope="col">Ustozi</th>
      <th scope="col">Telefon raqami</th>
      <th scope="col">To'lovi</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="checkbox"  />100</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Pre intermediate</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col"> +998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />102</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Pre intermediate</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />102</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Pre intermediate</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />102</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Pre intermediate</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"  />105</th>
      <td><a href="#">Durdona Egamberdiyeva</a></td>
      <td>Beginner</td>
      <td>Durdona Xudoberganova</td>
      <th scope="col">+998933322222</th>
      <th scope="col"><button className='tolov'>To‘lov</button></th>
      <th scope="col"><img src="src/img/Frame (1).png" alt="" /></th>
    </tr>
    
  </tbody>




</table>


<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>




    </>
  )
}

export default App
