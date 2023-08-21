import { useState, useEffect } from 'react';
import { ArrowLeft, ArrotRight } from '../svg';
import { RenderHeaderTable, RenderBodyTable } from './HeadBodyTable';
import { useDispatch } from 'react-redux';
import { setBagItem } from '@/feature/saveDataSlice';

export default function Table({ data }) {
  const a = data?.details;
  const dispatch = useDispatch();
  const [isArrayFiltered, setIsArrayFiltered] = useState([]);
  const [dataSlice, setDataSlice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const d = [
    {
      billDiscAmount: 0,
      amountBeforeTax: 45,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::54222c2c-24aa-46ab-8668-fce5396672ee',
      modifiers: [
        {
          modifierID: 'c66922f3-3f83-4f42-b3be-bd3437bd2838',
          modifier: {
            details: [
              {
                productID: 'product::a3a8d39b-a8c7-4c6e-a8cc-ae2239f1e272',
                quantity: 1,
                price: 0,
                name: 'Rice 饭',
                product: {
                  id: 'a3a8d39b-a8c7-4c6e-a8cc-ae2239f1e272',
                  name: 'Rice 饭',
                  categoryID: 'category::5a4c29a7-bd66-4516-baf8-394fdff78813',
                  retailPrice: 0,
                  taxRuleID: 'INC-TAX',
                  isNonDiscountable: false,
                  barcode: 'Z00000169',
                  references: [
                    {
                      name: 'POS SKU',
                      value: 'Z00000169',
                    },
                  ],
                },
                specialInstructions: [],
                productPrice: 0,
              },
              {
                productID: 'product::5d319943-ebc3-4138-97c7-3da37cf0464e',
                quantity: 1,
                price: 0,
                name: 'Ramen 拉面',
                product: {
                  id: '5d319943-ebc3-4138-97c7-3da37cf0464e',
                  name: 'Ramen 拉面',
                  categoryID: 'category::5a4c29a7-bd66-4516-baf8-394fdff78813',
                  retailPrice: 0,
                  taxRuleID: 'INC-TAX',
                  isNonDiscountable: false,
                  barcode: 'Z00000170',
                  references: [
                    {
                      name: 'POS SKU',
                      value: 'Z00000170',
                    },
                  ],
                },
                specialInstructions: [],
                productPrice: 0,
              },
            ],
          },
        },
      ],
      amountAfterDisc: 45,
      totalDiscAmount: 5,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 50,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 45,
      orderingStatus: 'AVAILABLE',
      id: '9dee8eda-e212-48da-b91b-e5e59d024172',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 50,
      lineDiscAmount: 5,
      taxableAmount: 45,
      product: {
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [],
        custom: {},
        name: 'local storage',
        printSequence: 101,
        id: '54222c2c-24aa-46ab-8668-fce5396672ee',
        variants: [],
        categoryName: 'Packet',
        retailPrice: 50,
        categoryID: 'category::e4f7b49a-e6e9-4e5d-80c7-c605f009209b',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 45,
      amountAfterTax: 45,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 50,
      isPromotionApplied: true,
      sequence: 1,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 50,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 45,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::54222c2c-24aa-46ab-8668-fce5396672ee',
      modifiers: [],
      amountAfterDisc: 45,
      totalDiscAmount: 5,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 50,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 45,
      orderingStatus: 'AVAILABLE',
      id: '87ff2ec2-1b6d-4ff6-b24c-d19d4d3679e0',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 50,
      lineDiscAmount: 5,
      taxableAmount: 45,
      product: {
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [],
        custom: {},
        name: 'Ang Bao Packet asd',
        printSequence: 102,
        id: '458340f2-1506-41e7-9bbd-28900eba1045',
        variants: [],
        categoryName: 'Packet',
        retailPrice: 50,
        categoryID: 'category::e4f7b49a-e6e9-4e5d-80c7-c605f009209b',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 45,
      amountAfterTax: 45,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 50,
      isPromotionApplied: true,
      sequence: 2,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 50,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
    {
      billDiscAmount: 0,
      amountBeforeTax: 90,
      surchargeAmount: 0,
      roundingAmount: 0,
      productID: 'product::72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
      modifiers: [],
      amountAfterDisc: 90,
      totalDiscAmount: 10,
      surchargeAmountBeforeTax: 0,
      collections: [
        'collection::1a267cf6-29ea-4e59-b2e1-9932402531b0',
        'collection::fd0ec874-e2ff-46e1-9300-fe22cc412c37',
      ],
      discountableAmount: 100,
      isPreOrderItem: false,
      lineDiscPercentage: '0%',
      amountBeforeSurcharge: 90,
      orderingStatus: 'AVAILABLE',
      id: 'ce4898d6-319d-4573-9742-023848a53f02',
      addByCustomerID: 'customer::0a00c5bb-c232-46d5-acdb-24ce889c2e19',
      unitPrice: 100,
      lineDiscAmount: 10,
      taxableAmount: 90,
      product: {
        productAvailableDate: '2000-01-01',
        references: [],
        rewardAdditionalCalcMode: 'NONE',
        productModifiers: [],
        imageFiles: [
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        ],
        custom: {},
        variants: [],
        categoryName: 'SOIL & AMENDMENTS',
        defaultImageURL:
          'https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/b0554488-1271-4b29-80b0-e39f9ee1c65e/product/2f148543-5ee4-4807-bcd8-decf2072a14c.webp',
        name: 'Christmas Tree',
        printSequence: 103,
        id: '72a7b91d-e681-4d74-b5ea-95940c2e0f5a',
        retailPrice: 100,
        categoryID: 'category::f17b0d18-d230-4328-9a72-b2787d159fef',
        allowSelfSelection: true,
      },
      quantity: 1,
      taxPercentage: 0,
      nettAmount: 90,
      amountAfterTax: 90,
      indexPromo: 0,
      isVoided: false,
      grossAmount: 100,
      isPromotionApplied: true,
      sequence: 3,
      promotions: [
        {
          name: '(Flat Rate) 10% off, All Items',
          isPromotionApplied: true,
          id: '7ad0429a-0066-4469-8835-c5a72bb41e1c',
        },
        {
          name: '(Item Specific Discount) Christmas Tree 10% off',
          id: '96713fd7-e671-487b-b6c1-564519646d97',
        },
      ],
      specialInstructions: [],
      taxAmount: 0,
      retailPrice: 100,
    },
  ];

  useEffect(() => {
    const filteredData = a?.filter((item) => {
      if (item?.product?.id === '458340f2-1506-41e7-9bbd-28900eba1045') {
        setIsArrayFiltered((prevArray) => [...prevArray, item]);
        return false;
      }
      return true;
    });

    setDataSlice(filteredData);
  }, [a]);

  useEffect(() => {
    if (isArrayFiltered.length > 0) {
      dispatch(setBagItem(isArrayFiltered));
    }
  }, [isArrayFiltered]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(dataSlice?.length / itemsPerPage) || 1;

  const paginatedData = dataSlice?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col'>
      <div>
        <div className='inline-block min-w-full'>
          <div className='overflow-hidden border border-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <RenderHeaderTable />
              {paginatedData?.map((items) => (
                <RenderBodyTable key={items} data={items} />
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end items-center mt-[8px]'>
        <button
          disabled={currentPage === 1 || data?.details?.length < itemsPerPage}
          onClick={handlePrevClick}
          className={`w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer ${
            currentPage === 1 || data?.details?.length < itemsPerPage
              ? 'opacity-30'
              : 'opacity-100'
          } `}
        >
          <ArrowLeft />
        </button>
        <div className='text-[25px] text-[#9D9D9D] font-semibold mx-[24px] w-[100px] text-center'>
          {currentPage}/{totalPages}
        </div>
        <button
          disabled={
            currentPage === totalPages || dataSlice?.length < itemsPerPage
          }
          onClick={handleNextClick}
          className={`w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer ${
            currentPage === totalPages || dataSlice?.length < itemsPerPage
              ? 'opacity-30'
              : 'opacity-100'
          }`}
        >
          <ArrotRight />
        </button>
      </div>
    </div>
  );
}
