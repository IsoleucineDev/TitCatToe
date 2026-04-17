import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { GatosListPage } from "./pages/GatosListPage";
import { GatosCreatePage } from "./pages/GatosCreatePage";
import { GatosEditPage } from "./pages/GatosEditPage";
import { GatosDetailPage } from "./pages/GatosDetailPage";
import { ArticulosListPage } from "./pages/ArticulosListPage";
import { ArticulosCreatePage } from "./pages/ArticulosCreatePage";
import { ArticulosEditPage } from "./pages/ArticulosEditPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "gatos", Component: GatosListPage },
      { path: "gatos/create", Component: GatosCreatePage },
      { path: "gatos/:id", Component: GatosDetailPage },
      { path: "gatos/:id/edit", Component: GatosEditPage },
      { path: "articulos", Component: ArticulosListPage },
      { path: "articulos/create", Component: ArticulosCreatePage },
      { path: "articulos/:id/edit", Component: ArticulosEditPage },
    ],
  },
]);
