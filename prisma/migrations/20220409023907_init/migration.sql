BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Author] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [firstName] NVARCHAR(1000),
    [lastName] NVARCHAR(1000),
    CONSTRAINT [Author_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Author_email_key] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Book] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [genre] NVARCHAR(1000) NOT NULL,
    [outOfPrint] BIT NOT NULL,
    [publisher] NVARCHAR(1000),
    [publishDate] DATETIME2 NOT NULL,
    [authorId] INT,
    CONSTRAINT [Book_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Book_title_key] UNIQUE ([title])
);

-- AddForeignKey
ALTER TABLE [dbo].[Book] ADD CONSTRAINT [Book_authorId_fkey] FOREIGN KEY ([authorId]) REFERENCES [dbo].[Author]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
