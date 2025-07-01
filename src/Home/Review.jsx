import { Star } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const Review = () => {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-4">
        <Fade triggerOnce>
          <h2 className="text-3xl font-bold mb-12 text-center ">
            What Our Members Say
          </h2>
        </Fade>

        <div className="grid md:grid-cols-3 gap-8">
          <Slide cascade damping={0.1} triggerOnce>
            {/* Review Card 1 */}
            <div className="bg-white/80  p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.ibb.co/j9XMZRTj/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg"
                  alt="Emma"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Richardson</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700  italic flex-grow">
                "LibraryLoop has totally changed how I manage my reading list. Borrowing books online is super convenient, and I love the recommendations!"
              </p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
                  alt="Marcus"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 ">Marcus Chen</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700  italic flex-grow">
                "The user interface of LibraryLoop is clean and fast. I can track my borrowed books easily and find new reads within seconds!"
              </p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white/80  p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold ">Sarah Williams</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic flex-grow">
                "I’ve connected with other readers through LibraryLoop, and we’ve even started virtual book circles! It’s more than just a library system."
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Review;
