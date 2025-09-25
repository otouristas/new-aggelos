interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Μαρία Παπαδοπούλου',
    location: 'Πειραιάς',
    rating: 5,
    comment: 'Εξαιρετική υπηρεσία! Το αυτοκίνητο ήταν καθαρό, νέο και σε άριστη κατάσταση. Η διαδικασία κράτησης ήταν πολύ εύκολη και γρήγορη. Σίγουρα θα το προτιμήσω ξανά.',
    avatar: '👩'
  },
  {
    id: '2',
    name: 'Γιάννης Κωνσταντίνου',
    location: 'Αθήνα',
    rating: 5,
    comment: 'Αξιόπιστη εταιρεία με πολύ καλές τιμές. Το προσωπικό είναι φιλικό και βοηθητικό. Το αυτοκίνητο που έλαβα ήταν ακριβώς όπως το περιμέναμε. Πολύ ευχαριστημένος!',
    avatar: '👨'
  },
  {
    id: '3',
    name: 'Ελένη Δημητρίου',
    location: 'Θεσσαλονίκη',
    rating: 5,
    comment: 'Τέλεια εμπειρία! Χρησιμοποιώ την AGGELOS Rentals κάθε φορά που επισκέπτομαι τον Πειραιά. Πάντα ενημερωμένα αυτοκίνητα και εξαιρετική εξυπηρέτηση.',
    avatar: '👩'
  },
  {
    id: '4',
    name: 'Νίκος Αντωνίου',
    location: 'Πειραιάς',
    rating: 5,
    comment: 'Η καλύτερη επιλογή για μίσθωση αυτοκινήτου στον Πειραιά. Γρήγορη διαδικασία, καθαρά αυτοκίνητα και πολύ καλές τιμές. Το συνιστώ ανεπιφύλακτα!',
    avatar: '👨'
  },
  {
    id: '5',
    name: 'Αννα Κουλουμπή',
    location: 'Αθήνα',
    rating: 5,
    comment: 'Εξαιρετική εξυπηρέτηση! Το προσωπικό είναι πολύ επαγγελματικό και βοηθητικό. Το αυτοκίνητο ήταν σε άριστη κατάσταση και η τιμή ήταν πολύ λογική.',
    avatar: '👩'
  },
  {
    id: '6',
    name: 'Δημήτρης Παπαγιάννης',
    location: 'Πειραιάς',
    rating: 5,
    comment: 'Αξιόπιστη εταιρεία με πολύ καλό πρόγραμμα. Χρησιμοποιώ τακτικά τις υπηρεσίες τους και δεν έχω αντιμετωπίσει ποτέ πρόβλημα. Πολύ ευχαριστημένος!',
    avatar: '👨'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Τι λένε οι πελάτες μας
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Διαβάστε τις εμπειρίες των πελατών μας και ανακαλύψτε γιατί επιλέγουν 
            την AGGELOS Rentals για τις ανάγκες μίσθωσης αυτοκινήτων τους.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.comment}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Γίνετε και εσείς ένας από τους ευχαριστημένους πελάτες μας!
            </h3>
            <p className="text-gray-600 mb-6">
              Επικοινωνήστε μαζί μας σήμερα και ανακαλύψτε γιατί χιλιάδες πελάτες 
              εμπιστεύονται την AGGELOS Rentals για τις ανάγκες μίσθωσης αυτοκινήτων τους.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center px-8 py-3 bg-[#2951a0] text-white font-semibold rounded-full hover:bg-[#2951a0fe] transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Κράτηση Τώρα
              </a>
              <a
                href="tel:+306980151068"
                className="inline-flex items-center px-8 py-3 bg-white text-[#2951a0] font-semibold rounded-full border-2 border-[#2951a0] hover:bg-blue-50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +30 698 015 1068
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
