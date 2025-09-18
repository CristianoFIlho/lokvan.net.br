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
    title: 'Transporte Escolar',
    description: 'Serviço especializado para estudantes com total segurança',
    color: 'lokvan.primary'
  },
  {
    icon: FaRoute,
    title: 'Colégio Militar',
    description: 'Transporte dedicado para o Colégio Militar de Salvador',
    color: 'lokvan.secondary'
  },
  {
    icon: FaCalendarAlt,
    title: 'Eventos Escolares',
    description: 'Transporte para passeios e atividades escolares',
    color: 'lokvan.accent'
  },
  {
    icon: FaUserTie,
    title: 'Transporte Personalizado',
    description: 'Serviços sob medida para instituições de ensino',
    color: 'purple.500'
  }
]

const benefits = [
  '5 veículos na frota (4 micro-ônibus e 1 van)',
  'Motoristas experientes e habilitados',
  'Seguro total para estudantes',
  'Atendimento especializado em transporte escolar',
  'Preços justos e competitivos',
  'Pontualidade garantida para horários escolares'
]

const testimonials = [
  {
    name: 'Direção do Colégio Militar',
    company: 'Colégio Militar de Salvador',
    text: 'Excelente serviço de transporte escolar! Sempre pontuais e com total segurança para nossos alunos.',
    rating: 5
  },
  {
    name: 'Pais de Estudantes',
    company: 'Famílias do Colégio Militar',
    text: 'Confiamos na Lokvan para o transporte seguro de nossos filhos. Serviço de qualidade!',
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
              Transporte Escolar Especializado
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              A Lokvan é especializada em transporte escolar seguro e confiável, 
              atendendo principalmente o Colégio Militar de Salvador com frota própria de 5 veículos (4 micro-ônibus e 1 van).
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
                Especializados em transporte escolar seguro e confiável para instituições de ensino
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
                  Empresa familiar especializada em transporte escolar, 
                  sempre priorizando a segurança e bem-estar dos estudantes.
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
                src="data:image/jpeg;base64,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"
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