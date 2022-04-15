BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [firstName] NVARCHAR(1000),
    [lastName] NVARCHAR(1000),
    [email] NVARCHAR(1000) NOT NULL,
    [hash] NVARCHAR(1000) NOT NULL,
    [hashedRt] NVARCHAR(1000),
    CONSTRAINT [users_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [users_email_key] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[ReadingList] (
    [bookId] INT NOT NULL,
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [firstName] NVARCHAR(1000),
    [lastName] NVARCHAR(1000),
    [email] NVARCHAR(1000),
    [authorId] INT,
    [genre] NVARCHAR(1000),
    [outOfPrint] BIT NOT NULL,
    [publisher] NVARCHAR(1000),
    [publishDate] NVARCHAR(1000),
    [imageUrl] NVARCHAR(1000),
    [description] NVARCHAR(1000),
    CONSTRAINT [ReadingList_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [ReadingList_bookId_key] UNIQUE ([bookId]),
    CONSTRAINT [ReadingList_title_key] UNIQUE ([title])
);

-- CreateTable
CREATE TABLE [dbo].[_ReadingListToUser] (
    [A] INT NOT NULL,
    [B] INT NOT NULL,
    CONSTRAINT [_ReadingListToUser_AB_unique] UNIQUE ([A],[B])
);

-- CreateIndex
CREATE INDEX [_ReadingListToUser_B_index] ON [dbo].[_ReadingListToUser]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[_ReadingListToUser] ADD CONSTRAINT [FK___ReadingListToUser__A] FOREIGN KEY ([A]) REFERENCES [dbo].[ReadingList]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ReadingListToUser] ADD CONSTRAINT [FK___ReadingListToUser__B] FOREIGN KEY ([B]) REFERENCES [dbo].[users]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
