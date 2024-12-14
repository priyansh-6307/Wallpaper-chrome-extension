import React from 'react'


const Shortcut = () => {
    const shortcuts = [
        { name: 'Github', url: 'https://github.com/', icon: 'https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF'},
        { name: 'Youtube', url: 'https://www.youtube.com/', icon: 'https://img.icons8.com/?size=100&id=85162&format=png&color=FFFFFF' },
        { name: 'Reddit', url: 'https://www.reddit.com/', icon: 'https://img.icons8.com/?size=100&id=12518&format=png&color=FFFFFF' },
        { name: 'Linkdin', url: 'https://www.linkedin.com/home?originalSubdomain=in', icon: 'https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF' },
      ];
      const borderColors = ['border-t-red-500', 'border-t-blue-500', 'border-t-yellow-500', 'border-t-green-500'];
      return (
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          {shortcuts.map((shortcut,index) => (
            <a
                className={`w-[142px] border-t-4 ${borderColors[index]} h-[80px] bg-gray-800/40 backdrop-blur-md rounded-lg flex items-center justify-center`}
              key={shortcut.name}
              href={shortcut.url}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '24px' }}
            >
             <img className='h-9  ' src={shortcut.icon} alt="" srcset="" />
            </a>
          ))}
        </div>
      );
}

export default Shortcut