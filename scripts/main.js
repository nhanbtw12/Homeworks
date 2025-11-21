let s = 0;
function contract() {
        document.getElementById('y').innerHTML = 'Trần Chí Nhân - hxajkzzz@gmail.com ';
        document.getElementById('z').innerHTML = `  
            <form action='mailto:hxajkzzz@gmail.com' method='get' enctype='text/plain'>
                Tên:<br>
                <input type='text' name='subject' placeholder='Tên của bạn<<3'><br>
                Email:<br>
                <input type='email' name='email' placeholder='Email của bạn<<3'><br>
                Trả lời:<br>
                <textarea name='body' rows='5' cols='30' placeholder='Phần trả lời<<3'></textarea><br>
                <input type='submit' value='Send'>
            </form>
        `;
}



fetch('scripts/data.json')
  .then(r => r.json())
  .then(data => {
    const keys = Object.keys(data[0]);

    // header row
    const header = `<tr>${keys.map(k => `<th>${k}</th>`).join('')}</tr>`;

    // body rows
    const rows = data.map(row => {
      const cells = keys.map(key => {
        const value = row[key];

        if (typeof value === "string" && value.startsWith("https")) {
          // Split before/after '#'
          const idx = value.indexOf('#');
          const href = idx !== -1 ? value.slice(0, idx) : value;
          const label = idx !== -1 ? value.slice(idx + 1) : value;
          return `<td><a href="${href}" target="_blank">${label}</a></td>`;
        }

        return `<td>${value}</td>`;
      }).join('');

      return `<tr>${cells}</tr>`;
    }).join('');

    document.getElementById("x").innerHTML = header + rows;
  });

