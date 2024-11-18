-- CreateTable
CREATE TABLE `Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `image_url` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `background_color` VARCHAR(191) NOT NULL,
    `text_color` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContentTag` (
    `contentId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    PRIMARY KEY (`contentId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ContentTag` ADD CONSTRAINT `ContentTag_contentId_fkey` FOREIGN KEY (`contentId`) REFERENCES `Content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContentTag` ADD CONSTRAINT `ContentTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
