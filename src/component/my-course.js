import React from 'react'

const isAuth = false;

const MyCourse = (props) => {
    if(!isAuth){
        props.navigate('/app');
        return null
    }
    
  return (
    <>
      <h1>My Cursos</h1>
    </>
  )
}

export default MyCourse
