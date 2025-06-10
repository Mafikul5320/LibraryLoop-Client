import { Award, BookOpen, Quote, TrendingUp, Users } from 'lucide-react';
import React from 'react';
import CountUp from 'react-countup';

const OurNumber = () => {
    return (
           <section className="py-20 bg-white">
  <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">

    {/* Stats Section */}
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Impact in Numbers
        </h3>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Join thousands of satisfied readers who have transformed their reading experience with LibraryLoop
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
            <BookOpen className='w-8 h-8 text-white'/>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2"><CountUp end={10000} duration={5}/> +</div>
          <div className="text-blue-100 font-medium">Books Available</div>
        </div>

        <div className="text-center">
          <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
            <Users className='w-8 h-8 text-white'/>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2"><CountUp end={5000} duration={5}/></div>
          <div className="text-blue-100 font-medium">Active Readers</div>
        </div>

        <div className="text-center">
          <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
            <Award className='w-8 h-8 text-white'/>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2"><CountUp end={25} duration={5}/></div>
          <div className="text-blue-100 font-medium">Categories</div>
        </div>

        <div className="text-center">
          <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
            <TrendingUp className='w-8 h-8 text-white'/>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2"><CountUp end={98} duration={5}/>%</div>
          <div className="text-blue-100 font-medium">User Satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default OurNumber;