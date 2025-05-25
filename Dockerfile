FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Accept build args for env vars needed at build time
ARG DATABASE_URL
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

# Set them as env vars for build
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

RUN npm run build

EXPOSE 3000

CMD npx prisma migrate deploy && npx prisma db seed && npm start