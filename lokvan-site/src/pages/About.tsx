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
  HStack,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEye, FaBullseye, FaHeart, FaBus, FaUsers, FaRoute, FaClock } from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

const values = [
  {
    icon: FaBullseye,
    title: 'Missão',
    description: 'Oferecer transporte escolar seguro e confiável, priorizando a segurança, pontualidade e bem-estar dos estudantes.',
    color: 'lokvan.primary'
  },
  {
    icon: FaEye,
    title: 'Visão',
    description: 'Ser reconhecida como referência em transporte escolar em Salvador, especialmente pelo serviço dedicado ao Colégio Militar.',
    color: 'lokvan.secondary'
  },
  {
    icon: FaHeart,
    title: 'Valores',
    description: 'Segurança dos estudantes, confiabilidade, respeito às famílias, pontualidade e compromisso com a educação.',
    color: 'lokvan.accent'
  }
]

const stats = [
  { label: 'Anos de Experiência', value: '15+', icon: FaClock },
  { label: 'Veículos na Frota', value: '5', icon: FaBus },
  { label: 'Estudantes Transportados', value: '500+', icon: FaUsers },
  { label: 'Anos com Colégio Militar', value: '10+', icon: FaRoute }
]

const About = () => {
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
              Sobre a Lokvan
            </Heading>
            <Text fontSize="xl" maxW="3xl">
              Uma empresa familiar especializada em transporte escolar, 
              atendendo principalmente o Colégio Militar de Salvador com dedicação e compromisso.
            </Text>
          </VStack>
        </Container>
      </MotionBox>

      {/* História Section */}
      <Box py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={4}>
                <Heading size="xl" color="lokvan.primary">
                  Nossa História
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Fundada em 2009, a Lokvan nasceu do sonho de uma família baiana em oferecer 
                  transporte escolar seguro e confiável para estudantes de Salvador.
                </Text>
                <Text color="gray.600">
                  Começamos com apenas 2 veículos e muito entusiasmo. Hoje, após mais de 15 anos 
                  de dedicação, contamos com uma frota de 5 veículos (4 micro-ônibus e 1 van), 
                  atendendo principalmente o Colégio Militar de Salvador e outras instituições de ensino.
                </Text>
                <Text color="gray.600">
                  Nossa trajetória é marcada pela constante busca por excelência no transporte escolar, 
                  investimentos em segurança e, principalmente, na qualificação de nossa equipe. 
                  Cada viagem é uma oportunidade de garantir o bem-estar e segurança dos estudantes.
                </Text>
              </VStack>
            </VStack>

            <Box>
              <Image
                src="https://via.placeholder.com/500x400/1E3A8A/FFFFFF?text=Nossa+Historia"
                alt="História da Lokvan"
                rounded="lg"
                shadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Números que Inspiram Confiança
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Mais de uma década transportando estudantes com segurança
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {stats.map((stat, index) => (
                <MotionCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  textAlign="center"
                >
                  <CardBody p={6}>
                    <VStack spacing={3}>
                      <Box
                        bg="lokvan.primary"
                        p={3}
                        rounded="full"
                        color="white"
                      >
                        <Icon as={stat.icon} boxSize={6} />
                      </Box>
                      <Stat>
                        <StatNumber fontSize="3xl" color="lokvan.primary">
                          {stat.value}
                        </StatNumber>
                        <StatLabel fontSize="md" color="gray.600">
                          {stat.label}
                        </StatLabel>
                      </Stat>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Mission, Vision, Values */}
      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Nossos Pilares
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Os valores que norteiam todas as nossas decisões e nos mantêm 
                focados no que realmente importa: você, nosso cliente.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {values.map((value, index) => (
                <MotionCard
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  _hover={{ transform: 'translateY(-8px)', shadow: 'xl' }}
                  h="full"
                >
                  <CardBody p={8} textAlign="center">
                    <VStack spacing={6}>
                      <Box
                        bg={value.color}
                        p={4}
                        rounded="full"
                        color="white"
                      >
                        <Icon as={value.icon} boxSize={8} />
                      </Box>
                      <VStack spacing={3}>
                        <Heading size="md" color="lokvan.primary">
                          {value.title}
                        </Heading>
                        <Text color="gray.600" textAlign="center">
                          {value.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Empresa Info Section */}
      <Box bg="lokvan.primary" color="white" py={16}>
        <Container maxW="4xl">
          <VStack spacing={8} textAlign="center">
            <Heading size="xl">LOKVAN LOCAÇÃO E TRANSPORTES LTDA</Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              <VStack spacing={4}>
                <Heading size="md" color="lokvan.accent">
                  Informações Legais
                </Heading>
                <VStack spacing={2}>
                  <HStack>
                    <Text fontWeight="bold">CNPJ:</Text>
                    <Text>04.157.527/0001-85</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold">Fundação:</Text>
                    <Text>2009</Text>
                  </HStack>
                </VStack>
              </VStack>

              <VStack spacing={4}>
                <Heading size="md" color="lokvan.accent">
                  Localização
                </Heading>
                <Text textAlign="center">
                  Loteamento - Granjas Rurais Pres. Vargas<br />
                  Salvador - BA<br />
                  CEP 41230-000
                </Text>
              </VStack>
            </SimpleGrid>

            <Badge
              colorScheme="yellow"
              variant="solid"
              p={2}
              rounded="md"
              fontSize="sm"
            >
              Empresa 100% Brasileira 🇧🇷
            </Badge>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default About