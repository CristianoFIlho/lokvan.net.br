import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Image,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { FaBus, FaRoute, FaCalendarAlt, FaUserTie, FaCheck, FaStar } from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

const services = [
  {
    icon: FaBus,
    title: 'Fretamento',
    description: 'Transporte para grupos com total segurança e conforto',
    color: 'lokvan.primary'
  },
  {
    icon: FaRoute,
    title: 'Viagens e Turismo',
    description: 'Excursões e viagens para destinos incríveis',
    color: 'lokvan.secondary'
  },
  {
    icon: FaCalendarAlt,
    title: 'Eventos',
    description: 'Transporte para eventos corporativos e sociais',
    color: 'lokvan.accent'
  },
  {
    icon: FaUserTie,
    title: 'Transfer Executivo',
    description: 'Serviço premium para executivos e VIPs',
    color: 'purple.500'
  }
]

const benefits = [
  'Frota moderna e bem conservada',
  'Motoristas experientes e habilitados',
  'Seguro total para passageiros',
  'Atendimento 24/7',
  'Preços competitivos',
  'Pontualidade garantida'
]

const testimonials = [
  {
    name: 'Maria Silva',
    company: 'Empresa XYZ',
    text: 'Excelente serviço! Sempre pontuais e com veículos em perfeito estado.',
    rating: 5
  },
  {
    name: 'João Santos',
    company: 'Turismo Bahia',
    text: 'Parceiros de confiança para nossos grupos de turismo. Recomendo!',
    rating: 5
  }
]

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        bgGradient="linear(to-r, lokvan.primary, lokvan.secondary)"
        color="white"
        py={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxW="6xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl" fontWeight="bold">
              Transporte Seguro e Confiável
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              A Lokvan oferece soluções completas em transporte para empresas, 
              turismo e eventos com frota moderna e equipe qualificada.
            </Text>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/orcamento"
                size="lg"
                variant="lokvan"
                _hover={{ transform: 'translateY(-2px)' }}
              >
                Solicitar Orçamento
              </Button>
              <Button
                as={RouterLink}
                to="/servicos"
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Conhecer Serviços
              </Button>
            </HStack>
          </VStack>
        </Container>
      </MotionBox>

      {/* Services Section */}
      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Nossos Serviços
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Oferecemos soluções completas em transporte para atender todas as suas necessidades
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {services.map((service, index) => (
                <MotionCard
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  _hover={{ transform: 'translateY(-8px)', shadow: 'xl' }}
                  cursor="pointer"
                >
                  <CardBody textAlign="center" p={6}>
                    <VStack spacing={4}>
                      <Box
                        bg={service.color}
                        p={3}
                        rounded="full"
                        color="white"
                      >
                        <Icon as={service.icon} boxSize={6} />
                      </Box>
                      <Heading size="md">{service.title}</Heading>
                      <Text color="gray.600">{service.description}</Text>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={4}>
                <Heading size="xl" color="lokvan.primary">
                  Por que escolher a Lokvan?
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Mais de 15 anos de experiência no mercado de transporte, 
                  sempre priorizando a segurança e satisfação dos nossos clientes.
                </Text>
              </VStack>

              <VStack align="start" spacing={3}>
                {benefits.map((benefit, index) => (
                  <HStack key={index}>
                    <Icon as={FaCheck} color="green.500" />
                    <Text>{benefit}</Text>
                  </HStack>
                ))}
              </VStack>

              <Button
                as={RouterLink}
                to="/sobre"
                variant="lokvan"
                size="lg"
              >
                Conhecer Nossa História
              </Button>
            </VStack>

            <Box>
              <Image
                src="https://via.placeholder.com/500x400/1E3A8A/FFFFFF?text=Nossa+Frota"
                alt="Frota Lokvan"
                rounded="lg"
                shadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                O que dizem nossos clientes
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Veja os depoimentos de quem já confia na Lokvan
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {testimonials.map((testimonial, index) => (
                <MotionCard
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CardBody p={6}>
                    <VStack spacing={4}>
                      <HStack>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} as={FaStar} color="yellow.400" />
                        ))}
                      </HStack>
                      <Text fontSize="lg" textAlign="center" fontStyle="italic">
                        "{testimonial.text}"
                      </Text>
                      <VStack spacing={1}>
                        <Text fontWeight="bold">{testimonial.name}</Text>
                        <Badge colorScheme="blue">{testimonial.company}</Badge>
                      </VStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="lokvan.primary" color="white" py={16}>
        <Container maxW="4xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="xl">
              Pronto para viajar com segurança?
            </Heading>
            <Text fontSize="lg">
              Solicite seu orçamento sem compromisso e descubra por que 
              somos a escolha certa para o seu transporte.
            </Text>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/orcamento"
                size="lg"
                variant="lokvan"
                bg="white"
                color="lokvan.primary"
                _hover={{ bg: 'gray.100' }}
              >
                Solicitar Orçamento Gratuito
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => window.open('tel:+5571996559262', '_blank')}
              >
                +55 71 99655-9262
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home