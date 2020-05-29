# Migration `20200520090419-create-posts`

This migration has been generated at 5/20/2020, 9:04:19 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL  ,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL  
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200520090419-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model Post {
+  id        Int       @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime  @default(now())
+}
```

