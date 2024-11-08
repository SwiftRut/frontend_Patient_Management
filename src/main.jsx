import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import { DoctorProvider } from "./context/DoctorContext.jsx";
import { PatientProvider } from "./context/PatientContext.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./context/ErrorBoundary.jsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <PatientProvider>
        <DoctorProvider>
          <AdminProvider>
            <GlobalProvider>
              <AuthProvider>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    style: {
                      margin: "0",
                    },
                  }}
                />
                <App />
              </AuthProvider>
            </GlobalProvider>
          </AdminProvider>
        </DoctorProvider>
      </PatientProvider>
    </QueryClientProvider>  
  </ErrorBoundary>
  </BrowserRouter>

);
