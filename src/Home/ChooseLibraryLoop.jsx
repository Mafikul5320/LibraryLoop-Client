import { Award, BookOpen, Clock, Shield, TrendingUp, Users } from 'lucide-react';


const ChooseLibraryLoop = () => {
    return (
        <div className='my-12 w-10/13 mx-auto'>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Why Choose LibraryLoop?
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the future of library management with our comprehensive platform designed to enhance your reading journey and connect you with a vibrant community of book lovers.
            </p>
            <div className='grid grid-cols-3 gap-8 mt-11'>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <BookOpen className='text-blue-700 hover:scale-108 hover:rotate-6 duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>Vast Collection</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Access over 10,000 books across multiple genres and categories</p>
                </div>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <Users className='text-green-700 hover:scale-108 hover:rotate-6 duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>Community Driven</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Join thousands of readers sharing reviews and recommendations</p>
                </div>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <Clock className='text-purple-700 hover:scale-108 hover:rotate-6  duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>24/7 Access</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Borrow and return books anytime with our digital platform</p>
                </div>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <Award className='text-orange-700 hover:scale-108 hover:rotate-6  duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>Quality Assured</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Curated collection of high-quality books from renowned authors</p>
                </div>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <TrendingUp className='text-red-700 hover:scale-108 hover:rotate-6  duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>Track Progress</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Monitor your reading journey with detailed analytics</p>
                </div>
                <div className='bg-gradient-to-br py-12 px-8 from-gray-50 to-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full'>
                    <Shield className='text-teal-700 hover:scale-108 hover:rotate-6  duration-200 ' size={34} />
                    <h1 className='text-2xl pt-8 hover:text-blue-700  text-gray-900 font-bold'>Secure Platform</h1>
                    <p className='text-gray-600 leading-relaxed pt-4'>Your data and reading history are protected with top-tier security</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseLibraryLoop;