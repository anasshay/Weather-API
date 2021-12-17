import React from 'react'

function SearchComp() {
    return (
        <div>
        <form>
        <input className='text' type="text" placeholder='Search...'/>
        <input className='button' type='submit' value='FIND WEATHER' />
        </form>
        </div>
    )
}

export default SearchComp
