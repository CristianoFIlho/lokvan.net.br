import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
  Badge,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import {
  FaBus,
  FaRoute,
  FaCalendarAlt,
  FaUserTie,
  FaCheck,
  FaUsers,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

const services = [
  {
    id: 'fretamento',
    icon: FaBus,
    title: 'Fretamento',
    description: 'Transporte coletivo para empresas, escolas e grupos',
    image: 'https://via.placeholder.com/400x250/1E3A8A/FFFFFF?text=Fretamento',
    features: [
      'Ônibus com ar condicionado',
      'Motoristas habilitados',
      'Seguro total para passageiros',
      'Manutenção preventiva rigorosa',
      'Contratos flexíveis',
      'Atendimento 24/7'
    ],
    capacity: '20 a 50 passageiros',
    ideal: 'Empresas, escolas, grupos'
  },
  {
    id: 'turismo',
    icon: FaRoute,
    title: 'Viagens e Turismo',
    description: 'Excursões e passeios para destinos incríveis',
    image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Turismo',
    features: [
      'Roteiros personalizados',
      'Guia turístico especializado',
      'Veículos confortáveis',
      'Paradas estratégicas',
      'Seguro viagem incluído',
      'Suporte durante toda a viagem'
    ],
    capacity: '15 a 45 passageiros',
    ideal: 'Agências, grupos de turismo'
  },
  {
    id: 'eventos',
    icon: FaCalendarAlt,
    title: 'Eventos Corporativos',
    description: 'Transporte especializado para eventos empresariais',
    image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Eventos',
    features: [
      'Logística personalizada',
      'Coordenação de embarque',
      'Veículos executivos',
      'Pontualidade garantida',
      'Suporte ao evento',
      'Relatórios de acompanhamento'
    ],
    capacity: '10 a 40 passageiros',
    ideal: 'Eventos corporativos, convenções'
  },
  {
    id: 'transfer',
    icon: FaUserTie,
    title: 'Transfer Executivo',
    description: 'Serviço premium para executivos e VIPs',
    image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Transfer',
    features: [
      'Veículos de luxo',
      'Motoristas uniformizados',
      'Atendimento personalizado',
      'Pontualidade absoluta',
      'Wi-Fi e comodidades',
      'Discrição e profissionalismo'
    ],
    capacity: '1 a 8 passageiros',
    ideal: 'Executivos, aeroportos, hotéis'
  }
]

const Services = () => {
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
              Nossos Serviços
            </Heading>
            <Text fontSize="xl" maxW="3xl">
              Oferecemos soluções completas em transporte, adaptadas às necessidades 
              específicas de cada cliente, sempre com foco na segurança e qualidade.
            </Text>
          </VStack>
        </Container>
      </MotionBox>

      {/* Services Grid */}
      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={16}>
            {services.map((service, index) => (
              <MotionBox
                key={service.id}
                w="full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card shadow="xl" overflow="hidden">
                  <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems="center">
                    <Box order={{ base: 2, lg: index % 2 === 0 ? 1 : 2 }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        h="300px"
                        w="full"
                        objectFit="cover"
                      />
                    </Box>
                    
                    <CardBody
                      p={8}
                      order={{ base: 1, lg: index % 2 === 0 ? 2 : 1 }}
                    >
                      <VStack align="start" spacing={6}>
                        <HStack spacing={4}>
                          <Box
                            bg="lokvan.primary"
                            p={3}
                            rounded="full"
                            color="white"
                          >
                            <Icon as={service.icon} boxSize={6} />
                          </Box>
                          <VStack align="start" spacing={1}>
                            <Heading size="lg" color="lokvan.primary">
                              {service.title}
                            </Heading>
                            <Text color="gray.600" fontSize="lg">
                              {service.description}
                            </Text>
                          </VStack>
                        </HStack>

                        <HStack spacing={6} wrap="wrap">
                          <Badge colorScheme="blue" p={2} rounded="md">
                            <HStack spacing={2}>
                              <Icon as={FaUsers} />
                              <Text>{service.capacity}</Text>
                            </HStack>
                          </Badge>
                          <Badge colorScheme="green" p={2} rounded="md">
                            {service.ideal}
                          </Badge>
                        </HStack>

                        <VStack align="start" spacing={3}>
                          <Text fontWeight="bold" color="lokvan.primary">
                            Características do serviço:
                          </Text>
                          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} w="full">
                            {service.features.map((feature, i) => (
                              <HStack key={i} spacing={2}>
                                <Icon as={FaCheck} color="green.500" />
                                <Text fontSize="sm">{feature}</Text>
                              </HStack>
                            ))}
                          </SimpleGrid>
                        </VStack>

                        <Button
                          as={RouterLink}
                          to="/orcamento"
                          variant="lokvan"
                          size="lg"
                        >
                          Solicitar Orçamento
                        </Button>
                      </VStack>
                    </CardBody>
                  </SimpleGrid>
                </Card>
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Garantias Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Nossas Garantias
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Em todos os nossos serviços, você pode contar com estas garantias
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  icon: FaShieldAlt,
                  title: 'Segurança Total',
                  description: 'Seguro completo e veículos vistoriados regularmente'
                },
                {
                  icon: FaClock,
                  title: 'Pontualidade',
                  description: 'Compromisso rigoroso com horários estabelecidos'
                },
                {
                  icon: FaUsers,
                  title: 'Equipe Qualificada',
                  description: 'Motoristas experientes e treinados continuamente'
                }
              ].map((guarantee, index) => (
                <MotionCard
                  key={guarantee.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  textAlign="center"
                  h="full"
                >
                  <CardBody p={8}>
                    <VStack spacing={4}>
                      <Box
                        bg="lokvan.accent"
                        p={4}
                        rounded="full"
                        color="white"
                      >
                        <Icon as={guarantee.icon} boxSize={8} />
                      </Box>
                      <Heading size="md" color="lokvan.primary">
                        {guarantee.title}
                      </Heading>
                      <Text color="gray.600">
                        {guarantee.description}
                      </Text>
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
              Qual serviço você precisa?
            </Heading>
            <Text fontSize="lg">
              Nossa equipe especializada está pronta para criar a solução 
              perfeita para suas necessidades de transporte.
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
                Solicitar Orçamento
              </Button>
              <Button
                as={RouterLink}
                to="/contato"
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Falar com Consultor
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Services