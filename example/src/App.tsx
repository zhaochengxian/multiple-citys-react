import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Demo = React.lazy(() => import("./pages/demo"));

export default function App() {
  return (
    <div>
      <h1>以下是省市区对选组件基本使用demo</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="demo"
            element={
              <React.Suspense fallback={<>...</>}>
                <Demo />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">说明</Link>
          </li>
          <li>
            <Link to="/demo">示例</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
function Home() {
  return (
    <div>
      <p>
        具体详细的其他更高级的属性配置，请参考
        <a href="https://github.com/zhaochengxian/multiple-citys-react">
          github说明
        </a>
      </p>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
