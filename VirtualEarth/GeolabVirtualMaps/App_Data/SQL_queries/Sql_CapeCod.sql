
GO
/****** Object:  Table [dbo].[VEPushpins]    Script Date: 06/12/2007 21:08:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VEPushpins](
	[GUID] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_VEPushpins_GUID]  DEFAULT (newid()),
	[georss:point] [varchar](25)  NOT NULL,
	[title] [varchar](25)  NULL,
	[description] [varchar](250)  NULL,
	[iconurl] [varchar](150)  NULL,
	[photourl] [varchar](50)  NULL,
	[moreinfourl] [varchar](50)  NULL,
	[timestamp] [timestamp] NOT NULL,
 CONSTRAINT [PK_VEPushpins] PRIMARY KEY CLUSTERED 
(
	[GUID] ASC
)WITH (IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF


GO
/****** Object:  Table [dbo].[VEPolylines]    Script Date: 06/12/2007 21:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VEPolylines](
	[GUID] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_VEPolylines_GUID]  DEFAULT (newid()),
	[MapID] [varchar](10)  NOT NULL,
	[Title] [varchar](30)  NOT NULL,
	[Georss:line] [varchar](max)  NOT NULL,
	[Color] [varchar](20)  NOT NULL,
	[Width] [tinyint] NOT NULL,
	[Iconurl] [varchar](150)  NULL,
	[Photourl] [varchar](50)  NULL,
	[Moreinfourl] [varchar](50)  NULL,
	[Timestamp] [timestamp] NOT NULL,
 CONSTRAINT [PK_VEPolylines] PRIMARY KEY CLUSTERED 
(
	[GUID] ASC
)WITH (IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF


GO
/****** Object:  Table [dbo].[VEPolygons]    Script Date: 06/12/2007 21:08:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VEPolygons](
	[GUID] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_VEPolygons_GUID]  DEFAULT (newid()),
	[georss:polygon] [text]  NOT NULL,
 CONSTRAINT [PK_VEPolygons] PRIMARY KEY CLUSTERED 
(
	[GUID] ASC
)WITH (IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]