import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './RoutesModel'
import HomePageManager from '../Display/HomePage/HomePageManager'
import HomeManagmentManager from '../Managment/HomeManagmentManager'
import AddProductManager from '../Managment/ManagmentActions/addProduct/AddProductManager'
import DeleteProductManager from '../Managment/ManagmentActions/deleteProduct/DeleteProductManager'
import EditProductManager from '../Managment/ManagmentActions/editProduct/EditProductManager'
import EditSingleProductManager from '../Managment/ManagmentActions/editProduct/EditSingleProductManager'
import StockManageManager from '../Managment/ManagmentActions/StockManage/StockManageManager'
import ContactMeManager from '../Pages/ContactMe/ContactMeManager'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePageManager />} />
      <Route path={ROUTES.ADMIN} element={<HomeManagmentManager />} />
      <Route path={ROUTES.ADD_PRODUCT} element={<AddProductManager />} />
      <Route path={ROUTES.EDIT_PRODUCT} element={<EditProductManager />} />
      <Route path={ROUTES.EDIT_SINGLE_PRODUCT + "/:id"} element={<EditSingleProductManager />} />
      <Route path={ROUTES.DELETE_PRODUCT} element={<DeleteProductManager />} />
      <Route path={ROUTES.STOCK_MANAGE} element={<StockManageManager />} />
      <Route path={ROUTES.CONTACT_ME} element={<ContactMeManager />} />
      <Route path={ROUTES.NOT_FOUND} element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  )
}

