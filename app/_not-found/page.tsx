export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
      <p className="text-lg text-gray-600 mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </p>

      <a
        href="/"
        className="text-blue-600 underline hover:text-blue-800 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
