'use client'

const UserMenu = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
      <button style={{backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: 'auto', opacity: '0.9', transition: '0.3s'}} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
        Iniciar sesión
      </button>
      <button style={{backgroundColor: '#008CBA', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: 'auto', opacity: '0.9', transition: '0.3s'}} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>
        Registrarse
      </button>
    </div>
  )
}

export default UserMenu