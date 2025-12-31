import { motion } from 'motion/react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] pb-2.5 md:pb-4 bg-clip-text text-transparent">
                        Pricing
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Invest in your well-being with our healing sessions and packages.
                    </p>
                    <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="bg-[#9d33c48c] text-white border-[#9d33c489] hover:bg-pink-600 lg:bg-transparent lg:text-[#42374b] lg:border-[#42374b] hover:lg:text-white hover:lg:bg-[#9d33c4] px-4 py-6 text-lg"
          >
            Book a free 30 min discovery session
          </Button>
                </motion.div>

                {/* 1. Reiki Distant Healing Session Pricing (Table) */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-semibold mb-8 text-center"
                    >
                        Reiki Distant Healing Session Pricing
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-100"
                    >
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#9674c8]/10 to-[#9b04d2]/10">
                                    <th className="p-4 md:p-6 font-semibold text-primary">Service</th>
                                    <th className="p-4 md:p-6 font-semibold text-primary">Duration</th>
                                    <th className="p-4 md:p-6 font-semibold text-primary">Price (AUD)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Standard Reiki Healing</td>
                                    <td className="p-4 md:p-6 text-gray-600">60 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">$80</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Short Reiki Session</td>
                                    <td className="p-4 md:p-6 text-gray-600">30 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">$45</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Extended Reiki Session</td>
                                    <td className="p-4 md:p-6 text-gray-600">90 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">$120</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Reiki + Crystal Healing Combo</td>
                                    <td className="p-4 md:p-6 text-gray-600">60 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">~$100</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Chakra Healing</td>
                                    <td className="p-4 md:p-6 text-gray-600">75 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">$100</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 md:p-6 text-gray-800">Aura Balancing</td>
                                    <td className="p-4 md:p-6 text-gray-600">60 min</td>
                                    <td className="p-4 md:p-6 font-medium text-gray-800">$100</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>

                {/* 2. Reiki Distant Healing Packages (Cards) */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                            Reiki Distant Healing Packages
                        </h3>
                        <p className="text-muted-foreground">Standard Rate: $80 per 60-minute session</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter Healing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-primary/20 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    5% OFF
                                </div>
                                <CardHeader className="text-center pb-2">
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">
                                        Starter Healing
                                    </CardTitle>
                                    <CardDescription className="text-lg font-medium text-gray-700">
                                        3 Sessions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4 pt-4">
                                    <p className=" text-gray-800" > Perfect for stress relief and short-term energy balancing</p>
                                    <div className="text-center space-y-1">
                                        <p className="text-gray-400 line-through text-lg">$240</p>
                                        <p className="text-4xl font-bold text-gray-800">$228</p>
                                    </div>
                                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                        You Save $12
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-2 pb-6 flex justify-center">
                                    <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                                        Choose Starter
                                    </button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Deep Healing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-[#9b04d2] border-2 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col transform scale-105 z-10">
                                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] h-1.5" />
                                <div className="absolute top-1.5 right-0 bg-[#9b04d2] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    10% OFF
                                </div>
                                <div className="absolute top-1.5 left-0 bg-[#9b04d2] text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                                    POPULAR
                                </div>
                                <CardHeader className="text-center pb-2 mt-2">
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">
                                        Deep Healing
                                    </CardTitle>
                                    <CardDescription className="text-lg font-medium text-gray-700">
                                        5 Sessions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4 pt-4">
                                    <div className="text-center space-y-1">
                                        <p className="text-gray-400 line-through text-lg">$400</p>
                                        <p className="text-4xl font-bold text-gray-800">$360</p>
                                    </div>
                                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                        You Save $40
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-2 pb-6 flex justify-center">
                                    <button onClick={() => scrollToSection('contact')}  className="w-full bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">
                                        Choose Deep Healing
                                    </button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Transformation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-primary/20 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    12.5% OFF
                                </div>
                                <CardHeader className="text-center pb-2">
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">
                                        Transformation
                                    </CardTitle>
                                    <CardDescription className="text-lg font-medium text-gray-700">
                                        7 Sessions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4 pt-4">
                                    <div className="text-center space-y-1">
                                        <p className="text-gray-400 line-through text-lg">$560</p>
                                        <p className="text-4xl font-bold text-gray-800">$490</p>
                                    </div>
                                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                        You Save $70
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-2 pb-6 flex justify-center">
                                    <button onClick={() => scrollToSection('contact')}  className="w-full bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                                        Choose Transformation
                                    </button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
