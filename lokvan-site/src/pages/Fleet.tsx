import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Badge,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import {
  FaUsers,
  FaSnowflake,
  FaWifi,
  FaTv,
  FaShieldAlt,
  FaUsb,
  FaVolumeUp,
  FaToilet
} from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

const fleet = [
  {
    id: 'micro-onibus',
    name: 'Micro-ônibus Executivo',
    capacity: '20 passageiros',
    image: 'https://via.placeholder.com/400x300/1E3A8A/FFFFFF?text=Micro+Onibus',
    features: [
      { icon: FaUsers, text: 'Até 20 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado' },
      { icon: FaWifi, text: 'Wi-Fi gratuito' },
      { icon: FaUsb, text: 'Tomadas USB' },
    ],
    ideal: 'Grupos pequenos, transfer executivo',
    category: 'Executivo'
  },
  {
    id: 'onibus-medio',
    name: 'Ônibus Rodoviário Médio',
    capacity: '35 passageiros',
    image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Onibus+Medio',
    features: [
      { icon: FaUsers, text: 'Até 35 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado' },
      { icon: FaTv, text: 'Sistema de som e TV' },
      { icon: FaToilet, text: 'Banheiro' },
    ],
    ideal: 'Excursões, fretamento empresarial',
    category: 'Rodoviário'
  },
  {
    id: 'onibus-grande',
    name: 'Ônibus Rodoviário',
    capacity: '46 passageiros',
    image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Onibus+Grande',
    features: [
      { icon: FaUsers, text: 'Até 46 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado duplo' },
      { icon: FaTv, text: 'TV e sistema de som' },
      { icon: FaToilet, text: 'Banheiro' },
    ],
    ideal: 'Viagens longas, grandes grupos',
    category: 'Rodoviário'
  },
  {
    id: 'van-executiva',
    name: 'Van Executiva',
    capacity: '15 passageiros',
    image: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Van+Executiva',
    features: [
      { icon: FaUsers, text: 'Até 15 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado' },
      { icon: FaWifi, text: 'Wi-Fi' },
      { icon: FaUsb, text: 'Tomadas e USB' },
    ],
    ideal: 'Transfer, grupos pequenos',
    category: 'Executivo'
  },
  {
    id: 'onibus-leito',
    name: 'Ônibus Semi-Leito',
    capacity: '42 passageiros',
    image: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Onibus+Leito',
    features: [
      { icon: FaUsers, text: 'Até 42 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado' },
      { icon: FaTv, text: 'Entretenimento' },
      { icon: FaToilet, text: 'Banheiro' },
    ],
    ideal: 'Viagens noturnas, conforto premium',
    category: 'Premium'
  },
  {
    id: 'sprinter',
    name: 'Sprinter Van',
    capacity: '19 passageiros',
    image: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Sprinter',
    features: [
      { icon: FaUsers, text: 'Até 19 passageiros' },
      { icon: FaSnowflake, text: 'Ar condicionado' },
      { icon: FaVolumeUp, text: 'Sistema de som' },
      { icon: FaShieldAlt, text: 'Segurança avançada' },
    ],
    ideal: 'Grupos médios, eventos',
    category: 'Conforto'
  }
]

const Fleet = () => {
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
              Nossa Frota
            </Heading>
            <Text fontSize="xl" maxW="3xl">
              Frota de 5 veículos (3 micro-ônibus e 2 ônibus) equipados para garantir 
              o transporte seguro dos estudantes.
            </Text>
          </VStack>
        </Container>
      </MotionBox>

      {/* Stats Section */}
      <Box py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} mb={16}>
            {[
              { number: '5', label: 'Veículos na Frota' },
              { number: '3', label: 'Micro-ônibus' },
              { number: '2', label: 'Ônibus' },
              { number: '15+', label: 'Anos de Experiência' }
            ].map((stat, index) => (
              <VStack key={index} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="lokvan.primary">
                  {stat.number}
                </Text>
                <Text color="gray.600" fontWeight="medium">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Fleet Grid */}
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Conheça Nossos Veículos
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Cada veículo da nossa frota passa por manutenção rigorosa e está 
                equipado para oferecer segurança aos estudantes
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {fleet.map((vehicle, index) => (
                <MotionCard
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  overflow="hidden"
                  shadow="lg"
                  _hover={{ transform: 'translateY(-8px)', shadow: 'xl' }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    h="200px"
                    w="full"
                    objectFit="cover"
                  />
                  
                  <CardBody p={6}>
                    <VStack align="start" spacing={4}>
                      <HStack justify="space-between" w="full">
                        <VStack align="start" spacing={1}>
                          <Heading size="md" color="lokvan.primary">
                            {vehicle.name}
                          </Heading>
                          <Text color="gray.600" fontWeight="medium">
                            {vehicle.capacity}
                          </Text>
                        </VStack>
                        <Badge
                          colorScheme={
                            vehicle.category === 'Executivo' ? 'blue' :
                            vehicle.category === 'Premium' ? 'purple' :
                            vehicle.category === 'Rodoviário' ? 'green' : 'orange'
                          }
                          variant="solid"
                          px={3}
                          py={1}
                        >
                          {vehicle.category}
                        </Badge>
                      </HStack>

                      <VStack align="start" spacing={2} w="full">
                        <Text fontSize="sm" fontWeight="bold" color="gray.700">
                          Recursos disponíveis:
                        </Text>
                        <SimpleGrid columns={2} spacing={2} w="full">
                          {vehicle.features.map((feature, i) => (
                            <HStack key={i} spacing={2}>
                              <Icon
                                as={feature.icon}
                                color="lokvan.primary"
                                boxSize={3}
                              />
                              <Text fontSize="xs" color="gray.600">
                                {feature.text}
                              </Text>
                            </HStack>
                          ))}
                        </SimpleGrid>
                      </VStack>

                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="gray.700">
                          Ideal para:
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {vehicle.ideal}
                        </Text>
                      </Box>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Maintenance Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={4}>
                <Heading size="xl" color="lokvan.primary">
                  Manutenção e Segurança
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Todos os nossos veículos passam por rigoroso programa de 
                  manutenção preventiva e corretiva, garantindo total segurança 
                  e confiabilidade em cada viagem.
                </Text>
              </VStack>

              <VStack align="start" spacing={3}>
                {[
                  'Revisões mensais obrigatórias',
                  'Inspeção diária antes de cada viagem',
                  'Pneus e freios checados regularmente',
                  'Sistema de ar condicionado sempre funcionando',
                  'Limpeza e higienização constante',
                  'Seguro total para veículos e passageiros'
                ].map((item, index) => (
                  <HStack key={index}>
                    <Icon as={FaShieldAlt} color="green.500" />
                    <Text>{item}</Text>
                  </HStack>
                ))}
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

            <Box>
              <Image
                src="https://via.placeholder.com/500x400/1E3A8A/FFFFFF?text=Manutencao"
                alt="Manutenção da Frota"
                rounded="lg"
                shadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="lokvan.primary" color="white" py={16}>
        <Container maxW="4xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="xl">
              Qual veículo é ideal para você?
            </Heading>
            <Text fontSize="lg">
              Nossa equipe pode ajudar você a escolher o veículo perfeito 
              para sua necessidade e orçamento.
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
                Consultar Disponibilidade
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
                Falar com Especialista
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Fleet