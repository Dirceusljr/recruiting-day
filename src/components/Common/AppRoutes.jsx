import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PrivateRoute } from '@/components/Common/index'
import { routes } from '@/routes'
import { Layout } from '@/pages/Layout'

export const AppRoutes = () => (
  <Routes>
    {routes.map(route => {
      const { path, pageComponent, enabled = true, isPublic = false, layoutComponent = Layout, breadcrumb = [] } = route
      const AppLayout = layoutComponent
      const PageComponent = pageComponent
      const PrivateOrPublicRoute = isPublic ? Fragment : PrivateRoute

      return (
        enabled && (
          <Route
            key={path}
            path={path}
            element={
              <PrivateOrPublicRoute>
                <AppLayout breadcrumb={breadcrumb}>
                  <PageComponent />
                </AppLayout>
              </PrivateOrPublicRoute>
            }
          />
        )
      )
    })}
  </Routes>
)
