import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Icon,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="lokvan.primary" color="white" mt="auto">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Contato */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Contato
            </Text>
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={FaPhone} />
                <Text>+55 71 99655-9262</Text>
              </HStack>
              <HStack>
                <Icon as={FaWhatsapp} />
                <Text>+55 71 99655-9262</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Text>lokvantur@gmail.com</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Endereço */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Endereço
            </Text>
            <HStack align="start">
              <Icon as={FaMapMarkerAlt} mt={1} />
              <Text>
                Loteamento - Granjas Rurais Pres. Vargas<br />
                Salvador - BA<br />
                CEP 41230-000
              </Text>
            </HStack>
          </VStack>

          {/* Serviços */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Serviços
            </Text>
            <VStack align="start" spacing={1}>
              <Text>Transporte Escolar</Text>
              <Text>Colégio Militar de Salvador</Text>
              <Text>Eventos Escolares</Text>
              <Text>Transporte Personalizado</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={6} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Text fontSize="sm">
            © 2024 LOKVAN LOCACAO E TRANSPORTES LTDA - CNPJ: 04.157.527/0001-85
          </Text>
          <HStack justify={{ base: 'start', md: 'end' }} spacing={4}>
            <Link href="https://wa.me/557196559262" isExternal>
              <Icon as={FaWhatsapp} boxSize={6} _hover={{ color: 'green.300' }} />
            </Link>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer