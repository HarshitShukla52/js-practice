const insertKey = document.getElementById('magic')

window.addEventListener('keydown', (evt) => {
    insertKey.innerHTML =`
        <div class ='color'>
        <table>
  <tr>
    <th>keys</th>
    <th>CodeOfKey</th>
    <th>Codes</th>
  </tr>
  <tr>
    <td>${evt.key === " " ? 'Space' :evt.key}</td>
    <td>${evt.keyCode}</td>
    <td>${evt.code}</td>
  </tr>
  
</table>
   </div>
    `

})