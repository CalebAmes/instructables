import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClickableProject from '../ClickableProjectComponent'


function Category(){
  const dispatch = useDispatch();

  
  
  const categoryItems = useSelector((state) => state.commenet)

}


export default Category