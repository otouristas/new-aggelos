export default function MapComponent() {
  return (
    <div className="w-full h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1573.5486778975217!2d23.641086!3d37.928156!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU1JzQxLjQiTiAyM8KwMzgnMzAuMiJF!5e0!3m2!1sen!2sus!4v1758799536185!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="AGGELOS Rentals Location - Piraeus"
      />
    </div>
  );
}
