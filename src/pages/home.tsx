import React from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  FileCheck,
  Calendar,
  UserCheck,
  House,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phoneDisplay = "+91 8851295651";
const phoneHref = "+918851295651";
const whatsappHref =
  "https://wa.me/+918851295651?text=Hello%20Polarstar%2C%20I%20would%20like%20to%20enquire%20about%20sanitary%20and%20plumbing%20products.";
const shopAddress = `GROUND FLOOR, 86/10, PRAKASH INDUSTRIAL ESTATE,
  SAHIBABAD, Ghaziabad, Uttar Pradesh, 201005`;

const navItems = [
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Brands", id: "brands" },
  { label: "Gallery", id: "projects" },
  { label: "FAQs", id: "faqs" },
];

const brands = [
  "JAQUAR",
  "HINDWARE",
  "CERA",
  "PARRYWARE",
  "ASTRAL PIPES",
  "WATERTEC",
  "PRAYAG",
];

export const documents = [
  {
    title: "GeM Registration Certificate",
    desc: "Official registration on Government e-Marketplace.",
    link: "https://drive.google.com/file/d/15AfryifBCjRMnuZuEe2WhD-JuYykT_uF/view?usp=drive_link",
  },
  {
    title: "GST Registration Certificate",
    desc: "Registered under GST with valid tax compliance.",
    link: "https://drive.google.com/file/d/1cPDqg1NcFHDwGKG2OtYtBYC_ykRQmHo-/view?usp=drive_link",
  },
  {
    title: "Import Export License",
    desc: "Authorized for import and export of goods under government regulations.",
    link: "https://drive.google.com/file/d/1HIvfLHw7-nLmoIJ3JWSvJkkmS94Uh4UD/view?usp=drive_link",
  },
];

const categories = [
  {
    title: "Sanitary Ware",
    desc: "Toilets, WC units, wash basins, urinals, and concealed systems.",
    img: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Bathroom Fittings",
    desc: "Taps, showers, mixers, diverters, drains, and premium fixtures.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Plumbing Materials",
    desc: "Pipes, valves, water tanks, fittings, adhesives, and project supply.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Tiles & Accessories",
    desc: "Floor tiles, wall tiles, bathroom accessories, shelves, and finishes.",
    img: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&q=80&w=900",
  },
];

const products = [
  {
    name: "Wall Mounted Basin Mixer",
    brand: "Jaquar",
    detail: "Solid brass body, chrome finish, ceramic cartridge.",
    image:
      "https://images.unsplash.com/photo-1596180737956-00cb917e382b?q=80&w=800",
  },
  {
    name: "Rimless One-Piece WC",
    brand: "Hindware",
    detail: "Premium ceramic, dual flush, easy-clean surface.",
    image:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "CPVC Pipe & Valve Set",
    brand: "Astral Pipes",
    detail: "Reliable hot and cold water plumbing material for projects.",
    image:
      "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80&w=800",
  },
];

const whyChoose = [
  {
    title: "GeM Registered Supplier",
    desc: "Registered on GeM (Government e Marketplace) with proven experience in handling government orders.",
    icon: CheckCircle,
  },
  {
    title: "Multiple Premium Brands",
    desc: "Compare trusted sanitary, tile, and plumbing brands in one place.",
    icon: Award,
  },
  {
    title: "Genuine Products",
    desc: "Original products with reliable supply channels and warranty support.",
    icon: ShieldCheck,
  },
  {
    title: "Wholesale & Retail Pricing",
    desc: "Clear pricing for homeowners, plumbers, contractors, and bulk buyers.",
    icon: PackageCheck,
  },
  {
    title: "Bulk Order Support",
    desc: "Coordinated material supply for apartments, villas, offices, and shops.",
    icon: Truck,
  },
];

const dealerNetwork = [
  {
    state: "Bihar",
    cities: "Katihar, Purnia, Darbhanga, Begusarai, Kishanganj",
  },
  {
    state: "West Bengal",
    cities: "Chanchal, Dalkola, Malda",
  },
  {
    state: "Uttarakhand",
    cities: "Haldwani, Rudrapur",
  },
  {
    state: "Odisha",
    cities: "Bhubaneswar, Cuttack",
  },
];

const services = [
  {
    title: "Home Bathroom Solutions",
    desc: "Complete product selection for new bathrooms and renovations.",
    icon: Wrench,
  },
  // {
  //   title: "Commercial Supply",
  //   desc: "Sanitaryware, fittings, and plumbing material supply for project sites.",
  //   icon: Building2,
  // },
  {
    title: "Plumbing Consultation",
    desc: "Guidance on compatible pipes, valves, fittings, tanks, and fixtures.",
    icon: HelpCircle,
  },
  {
    title: "Plumbing Services",
    desc: "Professional plumbing solutions including installation, repair, and maintenance for residential and commercial needs.",
    icon: Wrench,
  },
  {
    title: "Toilet & Bathroom Cleaning",
    desc: "Deep cleaning services for toilets and bathrooms ensuring hygiene, stain removal, and a fresh, sanitized environment.",
    icon: Sparkles,
  },
];

const steps = [
    {
      icon: Calendar,
      title: "Book a Service",
      description: "Select your service and choose a convenient time slot",
    },
    {
      icon: UserCheck,
      title: "Get Partner",
      description: "We will pair you with a verified professional that matches your needs",
    },
    {
      icon: House,
      title: "Enjoy the Peace",
      description: "Relax while our expert takes care of your home",
    },
  ];

const gallery = [
  {
    title: "Modern Bathroom Setup",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Tile & Fixture Display",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Completed Wash Area",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=900",
  },
];

const testimonials = [
  "Polarstar helped us choose the right fittings and plumbing material for our new house. The products were genuine and delivered on time.",
  "Good stock availability and practical guidance. We regularly buy pipes, valves, and bathroom fittings for project work.",
  "The team explained brand options clearly and gave fair pricing for our bulk sanitaryware order.",
];

const faqs = [
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes. Bulk pricing is available for contractors, plumbers, builders, and project orders depending on quantity and product category.",
  },
  {
    question: "Can you recommend brands for my budget?",
    answer:
      "Yes. The team can suggest suitable options across premium, mid-range, and value brands based on use, durability, and budget.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "The store focuses on product supply and consultation. Installation support can be discussed based on your location and project needs.",
  },
  {
    question: "Do you sell both retail and wholesale?",
    answer:
      "Yes. Polarstar serves homeowners, plumbers, contractors, and commercial buyers with retail and wholesale availability.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 md:px-8 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phoneHref}`}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{phoneDisplay}</span>
          </a>
          <a
            href="mailto:polarstarsales@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>polarstarsales@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{shopAddress}</span>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#87cfebe9] backdrop-blur-md shadow-sm py-4" : "bg-[#87cfebe9] py-6"}`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Polarstar home"
          >
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm group-hover:bg-accent transition-colors">
              <span className="text-primary-foreground font-bold text-xl tracking-tighter">
                P
              </span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-primary">
              POLAR ⭐
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            {navItems.map((item, index) => (
              <button
                key={`${item.id}-desktop-${index}`}
                onClick={() => scrollTo(item.id)}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground border-none"
            >
              Get Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#fafafa] z-30 p-4 lg:hidden border-t">
          <div className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item, index) => (
              <button
                key={`${item.id}-mobile-${index}`}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 border-b"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="w-full mt-4 rounded-sm"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}

      <main>
        <section className="!bg-[#87cfebe9] relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b">
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 hidden md:block" />
          <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30 border-muted text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Complete Bathroom & Plumbing Solutions Under One Roof
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary mb-6 tracking-tight">
                Built for <span className="text-accent">trades</span>, designed
                for <span className="text-accent">homes</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Trusted brands. Durable products. Best prices. Explore bathroom
                fittings, sanitaryware, plumbing materials, tiles, and
                accessories with expert guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-sm"
                  onClick={() => scrollTo("products")}
                >
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-sm h-14 px-8 text-base border-primary/20 hover:bg-muted"
                  onClick={() => scrollTo("brands")}
                >
                  View Brands
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-5 border-t pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Products in Stock
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Top Brands
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square bg-muted rounded-sm overflow-hidden relative shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern bathroom setup with premium fittings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-primary-foreground">
                  <div className="font-semibold text-xl mb-2">
                    Trade Showroom Open
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    Visit us to compare brands, finishes, fixtures, and complete
                    product setups.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-sm -z-10 hidden md:block opacity-20" />
            </div>
          </div>
        </section>

        <section id="brands" className="py-16 bg-white border-b scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
              Multi-brand sanitary and plumbing showroom
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {brands.map((brand, index) => (
                <div
                  key={`${brand}-brand-card-${index}`}
                  className="group border bg-background rounded-sm p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="text-xl font-black tracking-tight text-primary min-h-14 flex items-center justify-center">
                    {brand}
                  </div>
                  <button
                    onClick={() => scrollTo("products")}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                  >
                    View Products
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-[#87cfebe9] scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
                  A practical showroom for retail and wholesale buyers
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Polarstar is a sanitary and plumbing store built around trust,
                  range, and real product knowledge. From premium bathroom
                  fittings to everyday plumbing essentials, customers can
                  compare multiple brands and select durable products for homes,
                  shops, offices, and construction sites.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We support both retail purchases and wholesale supply, helping
                  homeowners, plumbers, contractors, and bulk buyers source the
                  right products without delays or guesswork.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=700"
                  alt="Bathroom product setup"
                  className="rounded-sm shadow-md object-cover h-64 w-full"
                />
                <img
                  src="http://images.unsplash.com/photo-1742134131017-44d377a611b1?q=80&w=700"
                  alt="Bathroom fittings display"
                  className="rounded-sm shadow-md object-cover h-64 w-full mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 border-t scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                  Product Categories
                </h2>
                <p className="text-muted-foreground text-lg">
                  Clear product sections for bathrooms, water supply, plumbing
                  work, tiles, and accessories.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollTo("contact")}
              >
                Request Catalog
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, index) => (
                <article
                  key={`${cat.title}-category-${index}`}
                  className="group cursor-pointer relative overflow-hidden rounded-sm border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-card"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-card relative z-10">
                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center justify-between">
                      {cat.title}{" "}
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </h3>
                    <p className="text-muted-foreground text-sm">{cat.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Featured Products
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Best-selling and premium items frequently requested by
                homeowners, plumbers, and contractors.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <article
                  key={`${product.name}-featured-${index}`}
                  className="bg-card text-card-foreground rounded-sm overflow-hidden border hover:-translate-y-1 hover:shadow-2xl transition-all"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-accent mb-2 tracking-wider uppercase">
                      {product.brand}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {product.detail}
                    </p>
                    <Button
                      className="w-full rounded-sm"
                      variant="outline"
                      onClick={() => scrollTo("contact")}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                The buying experience is built for people who need dependable
                products, transparent advice, and fast availability.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={`${item.title}-why-${index}`}
                    className="bg-card border p-6 rounded-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-accent mb-5" />
                    <h3 className="font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#87cfebe9] border-t">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Our Dealer Network Across India
              </h2>

              <p className="text-gray-600">
                We have an active dealer and supply network across multiple
                states, enabling smooth logistics and fast order fulfillment.
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {dealerNetwork.map((item, index) => (
                <div
                  key={`${item.state}-dealer-${index}`}
                  className="group p-6 bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-[#0ea5a4] transition-all relative overflow-hidden"
                >
                  {/* State */}
                  <h3 className="font-semibold text-lg mb-2 text-[#1e3a5f]">
                    {item.state}
                  </h3>

                  {/* Cities */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.cities}
                  </p>

                  {/* Bottom highlight */}
                  <div className="mt-4 text-xs text-[#f59e0b] font-medium opacity-0 group-hover:opacity-100 transition">
                    Active Dealer Network
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">
                Government Verified
              </h2>
              <p className="text-muted-foreground mt-2">
                Registered on GeM and authorized for government supply.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {documents.map((doc, i) => (
                <div key={i} className="p-5 border rounded-md bg-card hover:shadow-lg transition">
                  <h3 className="font-semibold mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {doc.desc}
                  </p>
                  <a href={doc.link} target="_blank" className="text-accent text-sm hover:text-[#f59e0b] font-medium">
                    View Document →
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="py-24 bg-[#87cfebe9] border-t">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                  Our Services
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From single bathroom upgrades to commercial supply needs,
                  Polarstar helps buyers select, compare, and source materials
                  with confidence.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article
                      onClick={() => scrollTo("contact")}
                      key={`${service.title}-service-${index}`}
                      className="border bg-card p-6 rounded-sm hover:border-accent/70 hover:shadow-md transition-all"
                    >
                      <Icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                How It Works
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Get your home services done in three simple steps.
              </p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-12 text-center">
              <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-0.5 bg-primary-foreground/30 -z-0" />

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={`${step.title}-step-${index}`}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg">
                      {Icon && <Icon className="w-10 h-10 text-primary" />}
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                    <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-[250px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-[#87cfebe9] scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                Projects & Gallery
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A look at bathroom installations, product setups, and completed
                finishes similar to what customers can plan with our product
                range.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <article
                  key={`${item.title}-gallery-${index}`}
                  className="group relative overflow-hidden rounded-sm border shadow-sm aspect-[4/5] bg-muted"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 right-6 text-primary-foreground font-bold text-xl">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 border-t">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                Customer Reviews
              </h2>
              <p className="text-muted-foreground text-lg">
                Local feedback from retail and trade customers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((review, index) => (
                <article
                  key={`testimonial-${index}`}
                  className="bg-card border p-7 rounded-sm shadow-sm"
                >
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    “{review}”
                  </p>
                  <div className="font-bold text-primary">
                    Customer {index + 1}
                  </div>
                  <div className="text-sm text-accent mt-1">
                    Verified local buyer
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-24 bg-[#87cfebe9] scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions customers ask before visiting or placing an
                order.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {faqs.map((faq, index) => (
                <article
                  key={`${faq.question}-faq-${index}`}
                  className="bg-card border p-6 rounded-sm"
                >
                  <h3 className="font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
                  Visit The Showroom
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Get quotes, inspect products firsthand, or discuss project
                  requirements with our technical team. No form required; call
                  or message directly.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        Shop Address
                      </h3>
                      <p className="text-muted-foreground">{shopAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Phone</h3>
                      <a
                        href={`tel:${phoneHref}`}
                        className="text-accent hover:underline font-medium block mb-1"
                      >
                        {phoneDisplay}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Mon-Sat, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-sm flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">WhatsApp</h3>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#25D366] hover:underline font-medium block"
                      >
                        Click to chat
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Quick quotes and availability checks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:sales@polarstar.com"
                        className="text-accent hover:underline font-medium block"
                      >
                        polarstarsales@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[420px] lg:h-auto bg-muted rounded-sm overflow-hidden border shadow-sm">
                <iframe
                  title="Polarstar Google Map location"
                  src="https://www.google.com/maps?q=GROUND+FLOOR,+86/10,+PRAKASH+INDUSTRIAL+ESTATE,+SAHIBABAD,+Ghaziabad,+Uttar+Pradesh,+201005&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="bg-primary border-t border-primary-foreground/10 text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-foreground flex items-center justify-center rounded-sm">
                  <span className="text-primary font-bold text-lg tracking-tighter">
                    P
                  </span>
                </div>
                <span className="font-bold text-xl tracking-tight">
                  POLAR ⭐
                </span>
              </div>
              <p className="text-primary-foreground/70">
                Bathroom fittings, plumbing materials, tiles, and multi-brand
                sanitary products for retail and wholesale buyers.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11.5"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <path
                      d="M13.5 8H15V5.5H13.5C11.57 5.5 10 7.07 10 9V11H8V13.5H10V19H12.5V13.5H14.5L15 11H12.5V9C12.5 8.45 12.95 8 13.5 8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11.5"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="10"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle cx="15.5" cy="8.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                {navItems.map((item, index) => (
                  <li key={`${item.id}-footer-${index}`}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">Brands</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                {brands.slice(0, 6).map((brand, index) => (
                  <li key={`${brand}-footer-brand-${index}`}>{brand}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">Contact</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                <li>
                  <a
                    href={`tel:${phoneHref}`}
                    className="hover:text-white transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@polarstar.com"
                    className="hover:text-white transition-colors"
                  >
                    polarstarsales@gmail.com
                  </a>
                </li>
                <li>{shopAddress}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Polarstar. All rights reserved.
            </p>
            <p>Complete Bathroom & Plumbing Solutions Under One Roof</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
