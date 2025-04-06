import { Header } from "./Header";


export default function MainLayout({ children }) {

    return (
        <body className="app">
            <Header  />

            <div className={`  pages`} >
                {children}
            </div>





        </body>
    );
}
